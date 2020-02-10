# Presentation Container Components

## What is it?

This recipe helps you separate the concerns of fetching data and displaying data.

## When to use this recipe

When your components are starting to look bloated.

## Ingredients

- Container Component (a little bit like an action method)
- Presentation Component (a little bit like a view)
- Data e.g. state passed as props (a little bit like view model data)

## Recipe (How)

1.  Create your `Container` component, this will

- Be named [something]Container.js
- Fetch any data
- Return the Presentation layer
- Pass the fetched data as a prop

2. Create your `Presentation` component, this will

- A functional component
- Be named the same as the `Container` component excluding "Container" in the name
- Contain the JSX required to display the information passed from the container
