<<<<<<< HEAD
Here’s the updated `README.md` file without the proxy server:




# Weather App

This project is a weather application built using React. The app retrieves the user's current location, displays weather data, and provides the option to search for other locations. It uses the Open-Meteo API for geocoding and weather data.

## Features

- **Get Current Location Weather**: Uses browser geolocation to get weather for the user's current location.
- **Location Search**: Allows users to search for and view weather in different locations.
- **Real-time Weather Data**: Fetches hourly and daily forecasts, including temperature, precipitation, and weather conditions.

## Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine.
- **npm**: Included with Node.js to manage dependencies.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/kvichave/weatherapp.git
   cd weatherapp
   ```

2. **Install Dependencies**

   Navigate to the client directory and install dependencies:

   ```bash
   cd client
   npm install
   ```

## Running the Project

1. Start the React development server:

   ```bash
   npm start
   ```

   The React app will start on `http://localhost:3000`.

## Project Structure

```plaintext
weatherapp/
│   ├── src/ 
│   │   ├── App.js        # Main component for the weather app
│   │   └── index.js      # Renders React app to the DOM
│   └── public/
│       └── index.html    # HTML template
```

## API Endpoints

The app directly communicates with the Open-Meteo API for the following endpoints:

- **Geocoding**: Retrieves location data using latitude and longitude.
- **Weather Data**: Retrieves weather forecast data for a specified location.

### Example API Usage

- **Reverse Geocode Request**: `https://geocoding-api.open-meteo.com/v1/reverse?latitude=19.0748&longitude=72.8856`
- **Weather Data Request**: `https://api.open-meteo.com/v1/forecast?latitude=19.0748&longitude=72.8856`

## Technologies Used

- **Frontend**: React, Axios
- **API**: Open-Meteo Geocoding and Weather API

## Acknowledgements

- **Open-Meteo API**: For providing free weather and geocoding data.
- **React**: For frontend development.


```

---

=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 042c915 (Initialize project using Create React App)
