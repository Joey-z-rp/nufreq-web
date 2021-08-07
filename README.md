# Nufreq Web

This application is a web interface for nufreq-services.
It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Frameworks / Tools

- React.js
- Redux
- Material-ui
- Typescript
- Jest
- ESlint

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits. You will also see any lint errors in the console.
By default, the application will use `http://localhost:8000` as the API base Url. This can be overridden by setting environment variable `REACT_APP_API_BASE_URL`.

### `npm run lint`

Runs linting and prettier checks. If you want to auto-fix the errors, run `npm run lint:fix`.

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

## Considerations / Improvements

- The refresh interval is limited to be greater than 3 to avoid spamming the backend server and potential UI issues
- In an application with limited scope like this one, a central state management mechanism may not be necessary. Other alternatives may work just fine, e.g react context api. However, redux is used here to demonstrate how the interaction flows/folder structure can be organised in a bigger project.
- Better UI/UX design
- More unit tests to prevent regression
