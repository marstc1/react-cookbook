# Context API Recipe

## What is it?

The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It's aimed at solving the problem of prop drilling (passing props down through multiple levels of components). It is often considered a simpler alternative to Redux as it has quite a bit less of an overhead and boiler plate to get going.

## When to use this recipe

- When you find yourself passing props down deep into your tree (prop drilling)
- You truly need 'global state' (auth, user settings, shopping cart management, translations, themes)
- Someone tells you that you need redux :) ... sometimes you do need redux but it shouldn't be the default go to
- In fact, any situation where you have to pass a prop through a component so it reaches another component somewhere down the tree is where you can use the Context API.
