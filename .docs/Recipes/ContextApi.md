# Context API (With useContext hooks) Recipe

## What is it?

The Context API enables components to access data across all levels of the application. It's aimed at solving the problem of prop drilling (passing props down through multiple levels of components). It is often considered a simpler alternative to Redux as it has quite a bit less of an overhead and boiler plate to get going.

## When to use this recipe

- When you find yourself passing props down deep into your tree (prop drilling)
- You truly need 'global state' (auth, user settings, shopping cart management, translations, themes)
- Someone tells you that you need redux :) ... sometimes you do need redux but it shouldn't be the default go to
- In fact, any situation where you have to pass a prop through a component so it reaches another component somewhere down the tree is where you can use the Context API.

## Ingredients

- Shared data
- Context (from react)
- State (optional)
- useContextHook (from react)
- Provider
- Consumer
- Props

## Super Simple Recipe (How)

1. Create the `Context` (set initial value to null) ...

   - Create 'UserContext.js' file ... if you are feeling tidy stick it in a context folder
   - Import `createContext` from `react`
   - Create a `UserContext` object by calling the createContext() function which we just imported
   - We will not be setting an initial value so we can pass `null` into the `createContext` function
   - Your `UserContext.js` should end up looking something like this ...

     ```
         import { createContext } from "react";

         export const UserContext = createContext(null);
     ```

2. Create a `Provider` and set an initial value ...

   - Open `index.js`
   - Wrap the `App` component with a `UserContext.Provider`
   - Add a `value` property with a value of "hello from the context" to the `UserContext.Provider`
   - Your `index.js` should look like this ...

     ```
         import React from "react";
         import ReactDOM from "react-dom";
         import App from "./App";
         import { BrowserRouter as Router } from "react-router-dom";
         import { UserContext } from "./context/UserContext";

         ReactDOM.render(
         <Router>
             <UserContext.Provider value='hello from context'>
                <App />
             </UserContext.Provider>
         </Router>,
         document.getElementById("root")
         );
     ```

3. Create a `Consumer`

   - Open `about.js`
   - Import the `useContext` hook from `react`
   - Import `UserContext` which you created in step 1
   - Create a `msg` object by calling `useContext` hook passing it the `UserContext` object
   - Now you can use the `msg` object in the return statement of your `About` component
   - Your `About.js` should look something like this ...

     ```
             import React, { useContext } from "react";
             import { UserContext } from "../context/UserContext";

             const About = () => {
             const msg = useContext(UserContext);

             return <div>Hello {msg} from About</div>;
             };

             export { About };
     ```

4. Fire up the App

   - Open the terminal `Ctrl + '`
   - Type `npm start`

5. Change the URL and see if it works!

   - Type `/about` on the end of your `localhost:portNumber` url and hit enter
   - Hopefully you should see the about page with the value coming from the context

## Slightly More Complex ... Changing State

1. Create the `Context`, the same as before in the simple recipe

2. Create a `State` value to store `Context`

   - Open `App.js`
   - Add a call to the `useState` hook inside the function
   - Set an initial value
   - Destructure `value` and `setValue` objects out of the object returned from the `useState` hook (these will be used as the initial value by the `Provider`)

3. Create a `Provider` and link it to the `State` value

   - Wrap the `<Switch>` component with a `<UserContext.Provider>` component
   - Set the initial `value` prop to contain the `value` and `setValue` objects

4. Create a `Consumer` in the child components

   - Open `About.js`
   - Add a call to the `useContext` hook inside the function
   - Destructure the `value` and `setValue` objects from the returned
   - You can now use these object in the component like so ...

     ```
         import React, { useContext } from "react";
         import { UserContext } from "../context/UserContext";

         const About = () => {
            const { value, setValue } = useContext(UserContext);

             return (
                 <>
                     <div>{value}</div>
                     <button onClick={() => setValue("Hey, from the context!")}>Change Value</button>
                 </>
             );
         };

         export { About };
     ```

5. Fire up the App

   - Open the terminal `Ctrl + '`
   - Type `npm start`

6. Click the button on the about page, click a link to change page and see if it works!

   - Type `/about` on the end of your `localhost:portNumber` url and hit enter
   - Hopefully you should see the button on the about page
   - Click it and you should notice the value change
   - Click a `<Link>` to go to the home page
   - You should see the value has also updated on this page too

## Next Level ... Conditionally changing UI based on changed context

1. Create the `Context`, the same as before in the simple recipe

2. Create a `State` value to store `Context`

   - Open `App.js`
   - Add a call to the `useState` hook inside the function
   - Set an initial value
   - Destructure `user` and `setUser` objects out of the object returned from the `useState` hook (these will be used as the initial value by the `Provider`)

3. Use the `useMemo` to create a function so that you only return a value if the state is updated (Performance enhancement)

   - Add a call to the `useMemo` hook below where you have created your `State` value
   - Set value of a `value` objects with the object returned from the hook
   - It should look something like this ...
     `const value = useMemo(() => ({ user, setUser }), [user, setUser]);`

4. Create a `Provider` and link it to the `useMemo` value

   - Wrap the `<Switch>` component with a `<UserContext.Provider>` component
   - Set the initial `value` prop to the `value` object returned from the `useMemo` hook
   - It should look something like this ...
     `<UserContext.Provider value={value}>`

5. Create a `Consumer` in the child components

   - Open `Home.js`
   - Add a call to the `useContext` hook inside the function
   - Destructure the `user` and `setUser` objects from the returned
   - You can now use these object in the component like so ...

     ```
      <div>
        <h2>Home</h2>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        {user ? (
          <button
            onClick={async () => {
              setUser(null);
            }}>
            Log out
          </button>
        ) : (
          <button
            onClick={async () => {
              const user = await login();
              setUser(user);
            }}>
            Login
          </button>
        )}
      </div>
     ```

   - Notice the button uses a `login()` function so we need to make a mock for that in the next step

6. Create a mock Login function

   - Create a "utils" folder
   - Create a "Login.js" file
   - Update it so that it contains the following
     ```
         export const login = async () => {
             return {
                 id: 4,
                 username: "Bob",
                 email: "bob@bob.com"
             };
         };
     ```

7. Update the `About` consumer

   - Open `About.js`
   - Update the `useContext` hook
   - Update the `return` statement to use `<pre>{JSON.stringify(user, null, 2)}</pre>`

8. Fire up the App

   - Open the terminal `Ctrl + '`
   - Type `npm start`

9. Click the button on the about page, click a link to change page and see if it works!

   - Navigate to the homepage
   - Hopefully you should see the "Login" button
   - Click it and you should notice the value change
   - Click a `<Link>` to go to the about page
   - You should see the value has also updated on this page too

## Things to note

- The provider component has to wrap the parent component containing the child component that will ultimately consume the data
- Context information will be reset if you refresh the browser or navigate to a route without using a `<Link>` component ... unless you cater for it, see another recipe coming soon :)
