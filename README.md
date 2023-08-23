# This project is a simple react app using the typescript template and redux

The main purpose of this project is to understand how to work with redux in a react typescript app.

# Steps to create app

1. Create the react app using the command :
   yarn create react-app project-name --template typescript
   or
   npx create-react-app project-name --template typescript

2. Inside your project-name folder, Install the redux dependencies :
   yarn add redux react-redux redux-thunk
   or
   npm install redux react-redux redux-thunk

3. Install the types of the redux dependencies to help TypeScript understand the libraries :
   yarn add -D @types/redux @types/react-redux @types/redux-thunk
   or
   npm install -D @types/redux @types/react-redux @types/redux-thunk

4. Create two folders, "components" where we're gonna write our components ts files and "store" where all the redux files while be written

To create this project I followed the instriction on [freedCodeCamp](https://www.freecodecamp.org/news/how-to-use-redux-in-your-react-typescript-app/#prerequisites)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
