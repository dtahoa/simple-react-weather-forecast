# React - weather-app

[Demo](https://dtahoa.github.io/simple-react-weather-forecast/)

# Table of Contents
- **[Getting Started](https://github.com/dtahoa/simple-react-weather-forecast#getting-started)**
- **[Technologies](https://github.com/dtahoa/simple-react-weather-forecast#technologies)**
- **[License](https://github.com/dtahoa/simple-react-weather-forecast#license)**
- **[Learn More](https://github.com/dtahoa/simple-react-weather-forecast#learn-more)**
- **[Contact](https://github.com/dtahoa/simple-react-weather-forecast#contact)**

# Getting Started
**Set up the project locally on your machine.**
## Basic Setup
- Clone the `master` branch in the repository
```bash
git clone https://github.com/dtahoa/simple-react-weather-forecast.git
```
- Install the packages using the command `npm install #or yarn install`. Make sure you already have nodejs & npm installed in your system.

## **Environment File**
- Create a `.env.local` file in the root directory of the project. Add the following properties in it:
(or `.env.test`, `.env.prod` depend on your envs)
  ```bash
  REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
  REACT_APP_API_KEY = <your Openweathermap APP KEY>
  REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'
  SKIP_PREFLIGHT_CHECK = true
  ```
  - My sample API key: '84777e8df3b215d48d552278b4bc99ec'

  - Adding SKIP_PREFLIGHT_CHECK variable to ignore conflict dependencies if any.

  - You can obtain your Open Weather Map key **[here](https://openweathermap.org/api)**. When you get your API key via email, it will be activated and ready to use within the next couple of hours.

## Available Scripts

In the project directory, you can run:

`npm run start`

Runs the app in the development mode.Open `[http://localhost:3000](http://localhost:3000/)` to view it in the browser. The page will reload if you make edits. 

You will also see any lint errors in the console.

`npm run lint`

Analyze your code to quickly find problems.

`npm run format`

Problems ESLint finds can be automatically fixed.

`npm run isready`

Combine format - lint and build command.

`npm test`

Launches the test runner in the interactive watch mode. See the section about

[**running tests**](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run coverage`

Launches the test runner with a coverate report.

`npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes. Your app is ready to be deployed!
See the section about [**deployment**](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`npm run eject`

**Note**: _this is a one-way operation. Once you eject, you can’t go back!_
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Technologies
- This application is created with **[Create React App project with TypeScript](https://create-react-app.dev/docs/adding-typescript/)**
- **[React](https://reactjs.org/)** _(v16.13)_
- **[Hooks](https://reactjs.org/docs/hooks-intro.html)**
- **[Material-ui](https://material-ui.com/)** React components for faster and easier web development. Build your own design system, or start with Material Design.

## License

Have a look at the **[license file](https://github.com/dtahoa/simple-react-weather-forecast/blob/master/LICENSE)** for details

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn Material-ui, checkout the [Material-ui documentation](https://material-ui.com/)

## Contact
Whether you’d like to discuss a project, I’d love to hear from you.
Email: **[jnguyenhoa@gmail.com](mailto:jnguyenhoa@gmail.com)**
