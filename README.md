## WorkPatterns Technical Challenge

In this challenge you will add new functionality to the codebase in this repository. Please fork the repository with your solution to the challenge and email us a link to your fork. There is no strict deadline for this challenge, but it should take no more than 4 hours to complete.

## Problem Statement

A key element of WorkPatterns is the discussion topic, which represents something that a user wants to discuss with their teammates. Discussion topics can be created, marked complete, deleted and have subtopics added to them, as shown in the video below:
![Alt Text](https://i.imgur.com/e0SFSs3.gif)


In this challenge, you will take a very simple application that can only create discussion topics and mark them as complete, and add three new pieces of functionality:

1. In the starter code, discussion topics are completed and uncompleted by clicking their checkbox button. A completed discussion topic has a green checkbox. Please add additional functionality so that all completed discussion topics are placed in a separate list below the uncompleted topics. Completed discussion topics should be ordered by when they were completed, with the most recently completed ones at the top. If a completed discussion topic is uncompleted, it should return to its original position in the list.

2. Add the ability to delete a discussion topic.

3. Add the ability to create subtopics for a discussion topic. Subtopics should appear directly below their parent discussion topic and be indented relative to the parent. Subtopics cannot have their own subtopics, i.e. the nesting of discussion topics is only 1 level deep. Subtopics obey the following rules:
    - If the parent topic of a sub-topic is completed, then the sub-topic is also completed.
    - If a subtopic is un-completed, then its parent topic is also un-completed.
    - If the parent topic of a subtopic is deleted, then the subtopic is also deleted.

## How to run the app
1. Clone the app
2. Run `yarn` to install packages
3. Run `yarn start` and navigate to localhost.


## Available Scripts
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
