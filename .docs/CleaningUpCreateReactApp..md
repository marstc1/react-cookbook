# Cleaning Up Create React App

So, create react app is great but it has a bunch of stuff you don't need once you want to get started with your project.

## Remove the following

- Comments from index.html
- logo.svg (also referenced in app.js)
- service-worker.js (also referenced in index.js) - Only keep this if you plan on using offline content
- index.css (also referenced in index.js)
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
- Update the [README.md](/README.md)

## Setup the following

- Git .. checkout [Git.md](./Git.md)
