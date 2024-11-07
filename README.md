# Weather App with Proxy Server

This project is a weather application built using React and Node.js. The app retrieves the user's current location, displays weather data, and provides the option to search for other locations. A proxy server is implemented to handle CORS issues when making requests to the Open-Meteo API.

## Features

- **Get Current Location Weather**: Uses browser geolocation to get weather for the user's current location.
- **Location Search**: Allows users to search for and view weather in different locations.
- **Proxy Server**: Handles requests to the Open-Meteo API and manages CORS issues.
- **Real-time Weather Data**: Fetches hourly and daily forecasts, including temperature, precipitation, and weather conditions.

## Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine.
- **npm**: Included with Node.js to manage dependencies.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app


Here's the `README.md` file with the information you provided, formatted for clarity:

---

```markdown
# Weather App with Proxy Server

This project is a weather application built using React and Node.js. The app retrieves the user's current location, displays weather data, and provides the option to search for other locations. A proxy server is implemented to handle CORS issues when making requests to the Open-Meteo API.

## Features

- **Get Current Location Weather**: Uses browser geolocation to get weather for the user's current location.
- **Location Search**: Allows users to search for and view weather in different locations.
- **Proxy Server**: Handles requests to the Open-Meteo API and manages CORS issues.
- **Real-time Weather Data**: Fetches hourly and daily forecasts, including temperature, precipitation, and weather conditions.

## Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine.
- **npm**: Included with Node.js to manage dependencies.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Install Dependencies**

   Install server dependencies:

   ```bash
   npm install express axios
   ```

   Install client dependencies:

   ```bash
   cd client
   npm install
   ```

## Running the Project

### Start the Proxy Server

1. Navigate to the server folder and start the server:

   ```bash
   node index.js
   ```

   The server will start on `http://localhost:5000` and serve as a proxy for API requests.

### Start the React App

1. From the root folder, navigate to the client directory:

   ```bash
   cd client
   ```

2. Start the React development server:

   ```bash
   npm start
   ```

   The React app will start on `http://localhost:3000`.

## Project Structure

```plaintext
weather-app/
├── client/               # React application
│   ├── src/
│   │   ├── WeatherApp.js # Main component for the weather app
│   │   ├── App.js        # React App entry point
│   │   └── index.js      # Renders React app to the DOM
│   └── public/
│       └── index.html    # HTML template
└── index.js              # Express server acting as a proxy for API requests
```

## API Endpoints

The server acts as a proxy for the following endpoints:

- **/api/reverse-geocode**: Accepts `latitude` and `longitude` as query parameters, returning the reverse geocode data from Open-Meteo.
- **/api/weather**: Accepts `latitude` and `longitude` as query parameters, returning weather forecast data for the specified location.

### Example Usage

- **Reverse Geocode Request**: `GET http://localhost:5000/api/reverse-geocode?latitude=19.0748&longitude=72.8856`
- **Weather Data Request**: `GET http://localhost:5000/api/weather?latitude=19.0748&longitude=72.8856`

## Technologies Used

- **Frontend**: React, Axios
- **Backend**: Node.js, Express, Axios
- **API**: Open-Meteo Geocoding and Weather API

## Acknowledgements

- **Open-Meteo API**: For providing free weather and geocoding data.
- **React**: For frontend development.
- **Express**: For setting up the proxy server.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

---

Copy this content into a file named `README.md` in the root directory of your project. It provides a clear and comprehensive guide for setting up, running, or modifying your project.
