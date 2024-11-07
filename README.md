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

