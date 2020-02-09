# Context API (With useContext hooks) Recipe

## What is it?

The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It's aimed at solving the problem of prop drilling (passing props down through multiple levels of components). It is often considered a simpler alternative to Redux as it has quite a bit less of an overhead and boiler plate to get going.

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

## Things to note

- The provider component has to wrap the parent component containing the child component that will ultimately consume the data
