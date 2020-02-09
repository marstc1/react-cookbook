# npm

## What is npm

npm (originally short for Node Package Manager) is a package manager for the javascript language. It is similar to Yarn another package manager which replaced npm for a while giving developers some enhanced features. Now things have moved on and npm has many of the features which Yarn covered in the past.

## Why do we need it

It is basically used for managing dependencies of various server side dependencies. We can manage our server side dependencies manually as well if we like but once our project's dependencies grow it becomes difficult to install and manage.

## How does it work

- npm is a library of packages which you can search for packages by going to [https://www.npmjs.com/](https://www.npmjs.com/).
- You can usually install a package by opening the terminal `Ctrl + '` and typing `npm i [package name]` ... check the package Readme on npmjs though to make sure.
- npm will download and store the package in the node_modules folder of your react app.
- npm will also update packages.json and packages-lock.json to keep track of what version you are using.

## Useful commands

| Command                          | What does it do ...                                                                                                                                  |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npx`                            | e.g. `npx create-react-app appName` is a package runner (x probably stands for eXecute) this will typically download and run a package temporarily.  |
| `npm i`                          | Downloads all your project dependencies by installing all the packages listed in the packages.json folder                                            |
| `npm i [pkg]`                    | Installs the specified package and sets it as a dependency in your packages.json file                                                                |
| `npm i [pkg] --save-dev`         | Installs the specified package and sets it as a dev dependency (not required for your app to run) - e.g. unit tests, minification etc.               |
| `npm i [pkg]@[version]`          | Installs a specific version of a package e.g. `npm i eslint@3.13.0`                                                                                  |
| `npm i -g [pkg]`                 | Installs the package globally on your machine, you would only do this with packages that run executable against all your apps e.g. npm-check-updates |
| `npm uninstall [pkg] --save-dev` | Removes a dev dependency                                                                                                                             |
| `npm view [pkg]`                 | Gets the latest package info                                                                                                                         |
| `npm outdated`                   | Lists any packages that you are using which have updates available                                                                                   |
| `npm update`                     | Updates your packages, packages with major version change will not get upgraded as this usually indicates a breaking change                          |
| `ncu -u`                         | Updates all the packages (including major releases). Install the npm-check-updates package globally `npm install -g npm-check-updates`               |
| `npm cache clean`                | Clears the npm cache ... deleting the modules from node_modules does the same thing                                                                  |
| `npm start`                      | Starts the web server (it actually does this by running the start script in the react-scripts package which was installed by create-react-app)       |
| `Ctrl + c`                       | Stop the web server                                                                                                                                  |
| `npm run build`                  | Creates a production bundle                                                                                                                          |

## Useful packages

| Package          | What is it ...                                                                            |
| ---------------- | ----------------------------------------------------------------------------------------- |
| react-router-dom | This enables you to route users to specific pages based on the url entered in the browser |

## Useful Links

- [npmjs.com](https://www.npmjs.com/)
- [npmtrends.com](https://www.npmtrends.com/)
