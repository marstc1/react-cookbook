# Router Recipe

## What is it?

The react router is declarative router for react which uses dom bindings.

## When to use this recipe

- When you have a react application with content spread across multiple pages.

## Ingredients

- react-router-dom package
- More than one page
- BrowserRouter component (react-router-dom)
- Switch component (react-router-dom)
- Route component (react-router-dom)

## Recipe (How)

1. Install `react-router-dom`
   - Open the terminal `Ctrl + '` and
   - Type `npm i react-router-dom` to install react-router-dom
2. Add Router component to `index.js`
   - Open `index.js`
   - Wrap the `<App />` component with the `<Router>` component ...
     ```
     <Router>
         <App />
     </Router>
     ```
3. Import BrowserRouter (Router will be the alias)
   - Scroll to the bottom of the import block in your `index.js` file
   - Type `import { BrowserRouter as Router } from "react-router-dom";`
4. Add a Switch and Your Routes to `App.js`
   - Open `App.js`
   - _skip the next step if you have [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)_
   - Import the pages you are routing to (e.g. Home and About), also import `Switch` and `Route` from `react-router-dom`
   - Update the return statement of your App function ...
     ```
     function App() {
         return (
             <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
             </Switch>
         );
     }
     ```
5. Fire up the App
   - Open the terminal `Ctrl + '`
   - Type `npmp start`
6. Change the URL and see if it works!
   - Type `/` on the end of your `localhost:portNumber` url and hit enter
   - Hopefully you should see the home page
   - Replace `/` with `/about` and hit enter
   - Hopefully you should see the about page

## Things to Note

- The `<Router>` component is actually `<BrowserRouter>` ... most people set BrowserRouter as Router on the import to make it more readable.
- Remember, you are not really redirecting the user to a different page, you are just injecting different content into the main `div` based on a match of the `url`.
- We need to ensure we have `exact` in the "Home" `Route` to ensure we don't end up getting 2 matches and injecting the content of both Home and About into the main div.

## Useful Links

- [reacttraining.com - react-router](https://reacttraining.com/react-router/web/guides/quick-start)
- [react-router - GitHub](https://github.com/ReactTraining/react-router)
