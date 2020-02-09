# Cleaning Up Create React App

So, create react app is great but it has a bunch of stuff you don't need once you want to get started with your project.

## Remove the following

- Comments from index.html
- logo.svg (also referenced in app.js)
- service-worker.js (also referenced in index.js) - Only keep this if you plan on using offline content
- index.css (also referenced in index.js)
- Delete the contents of `<div className='App'>...</div>` in App.js
- Delete the contents of app.css

## Update the following

- Replace the contents of app.css with

```
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

    body {
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.4;
    }

    a {
        color: #333;
        text-decoration: none;
    }
```

- Change the favicon
- logo192.png and logo512.png - These are used for app icons on mobile devices.
- Change the `<meta name="description" content="Web site created using create-react-app" />` tag in index.html
- Update the [README.md](/README.md)

## Setup the following

- Git .. checkout [Git.md](./Git.md)

## Install peer dependencies

Run `npm i` and you will likely get a list of warnings informing you about peer dependencies. This is the list I got when I run it in Feb 2020, this is likely to change over time so double check your before running.

| Peer dependency        | Description                                                        | Command                                                            |
| ---------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| eslint-plugin-flowtype | [Flow](http://flow.org) type linting rules for ESLint              | `npm i eslint-plugin-flowtype@3.13.0 --save-dev`                   |
| typescript             | Provides support for TypeScript (by Microsoft)                     | `npm i -g typescript@3.2.1` or `npm i typescript@3.2.1 --save-dev` |
| sass                   | A pure javascript implementation of [Sass](https://sass-lang.com/) | `npm install -g sass` or `npm i sass@^1.3.0 --save-dev`            |
| fibers                 | Cooperative multitasking for javascript                            | `npm i fibers@>= 3.1.0 --save-dev`                                 |
| node-sass              | Wrapper around LibSass which is a Sass compiler in C++             | `npm i node-sass --save-dev`                                       |
| fsevents               | Native access to MacOS FSEvents in Node.js                         | `npm i fsevents@latest -f --save-optional`                         |
