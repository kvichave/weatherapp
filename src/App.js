import React, { useState, useEffect } from "react";
import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Droplets,
  ThermometerSun,
  ThermometerSnowflake,
  Search,
  MapPin,
  Loader,
} from "lucide-react";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [gettingLocation, setGettingLocation] = useState(true);

  const getCurrentLocation = () => {
    setGettingLocation(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${latitude}&longitude=${longitude}`
            );
            const data = await response.json();
            const locationName = data.results?.[0]?.name || "Current Location";

            setCity({
              name: locationName,
              lat: latitude,
              lon: longitude,
            });
          } catch (err) {
            setCity({
              name: "Current Location",
              lat: latitude,
              lon: longitude,
            });
          }
          setGettingLocation(false);
        },
        (error) => {
          console.error("Geolocation error:", error);
          setCity({
            name: "New York",
            lat: 40.71,
            lon: -74.01,
          });
          setGettingLocation(false);
        }
      );
    } else {
      setCity({
        name: "New York",
        lat: 40.71,
        lon: -74.01,
      });
      setGettingLocation(false);
    }
  };

  const fetchWeather = async (lat, lon) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation_probability,weathercode&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto`
      );
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  const searchCities = async (searchTerm) => {
    if (searchTerm.length < 2) {
      setSearchResults([]);
      return;
    }

    try {
      setSearching(true);
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${searchTerm}&count=5&language=en&format=json`
      );
      const data = await response.json();
      setSearchResults(data.results || []);
    } catch (err) {
      setError("Failed to search cities");
    } finally {
      setSearching(false);
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (city) {
      fetchWeather(city.lat, city.lon);
    }
  }, [city]);

  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      if (search) {
        searchCities(search);
      }
    }, 300);

    return () => clearTimeout(debounceSearch);
  }, [search]);

  const handleCitySelect = (result) => {
    setCity({
      name: result.name,
      lat: result.latitude,
      lon: result.longitude,
    });
    setSearch("");
    setSearchResults([]);
  };

  const getWeatherIcon = (code) => {
    if (!code) return <Sun className="w-8 h-8 text-yellow-500" />;

    if (code === 0) return <Sun className="w-8 h-8 text-yellow-500" />;
    if (code >= 1 && code <= 3)
      return <Cloud className="w-8 h-8 text-gray-500" />;
    if (code >= 51 && code <= 67)
      return <CloudRain className="w-8 h-8 text-blue-500" />;
    if (code >= 71 && code <= 77)
      return <CloudSnow className="w-8 h-8 text-blue-200" />;
    if (code >= 95 && code <= 99)
      return <CloudLightning className="w-8 h-8 text-yellow-600" />;
    return <Cloud className="w-8 h-8 text-gray-500" />;
  };

  const formatTime = (timeStr) => {
    return new Date(timeStr).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  if (gettingLocation || (loading && !weatherData)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-200">
        <Loader className="w-8 h-8 text-blue-500 animate-spin mb-4" />
        <div className="text-lg text-gray-600">
          {gettingLocation
            ? "Getting your location..."
            : "Loading weather data..."}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="text-lg text-red-600 bg-white/80 backdrop-blur-lg rounded-lg shadow-lg p-6">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="relative">
          <div className="flex items-center bg-white/80 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-3 flex items-center">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for a city..."
                className="w-full pl-10 pr-4 py-3 bg-transparent focus:outline-none"
              />
            </div>
            <button
              onClick={getCurrentLocation}
              className="px-4 py-3 border-l border-gray-200 bg-gray-50/50 hover:bg-gray-100/50 transition-colors"
            >
              <MapPin className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {searchResults.length > 0 && (
            <div className="absolute w-full mt-2 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg z-10">
              {searchResults.map((result) => (
                <button
                  key={`${result.latitude}-${result.longitude}`}
                  onClick={() => handleCitySelect(result)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none"
                >
                  {result.name}, {result.country}
                </button>
              ))}
            </div>
          )}
        </div>

        {!loading && weatherData && (
          <>
            <div className="bg-white/80 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {city.name}
                  </h2>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {getWeatherIcon(weatherData?.hourly?.weathercode[0])}
                    <div>
                      <div className="text-4xl font-bold text-gray-800">
                        {Math.round(weatherData?.hourly?.temperature_2m[0])}°C
                      </div>
                      <div className="text-gray-600">
                        Precipitation:{" "}
                        {weatherData?.hourly?.precipitation_probability[0]}%
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      <ThermometerSun className="w-5 h-5 text-red-500" />
                      <span className="text-gray-800">
                        High:{" "}
                        {Math.round(weatherData?.daily?.temperature_2m_max[0])}
                        °C
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ThermometerSnowflake className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-800">
                        Low:{" "}
                        {Math.round(weatherData?.daily?.temperature_2m_min[0])}
                        °C
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Hourly Forecast
                </h2>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                  {weatherData?.hourly?.time.slice(0, 8).map((time, index) => (
                    <div key={time} className="text-center">
                      <div className="text-sm text-gray-600">
                        {formatTime(time)}
                      </div>
                      <div className="my-2">
                        {getWeatherIcon(weatherData.hourly.weathercode[index])}
                      </div>
                      <div className="text-lg font-semibold text-gray-800">
                        {Math.round(weatherData.hourly.temperature_2m[index])}°C
                      </div>
                      <div className="flex items-center justify-center text-sm text-gray-600">
                        <Droplets className="w-4 h-4 mr-1" />
                        {weatherData.hourly.precipitation_probability[index]}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Sun className="w-6 h-6 text-yellow-500" />
                  <div>
                    <div className="text-sm text-gray-600">Sunrise</div>
                    <div className="font-semibold">
                      {formatTime(weatherData?.daily?.sunrise[0])}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Sun className="w-6 h-6 text-orange-500" />
                  <div>
                    <div className="text-sm text-gray-600">Sunset</div>
                    <div className="font-semibold">
                      {formatTime(weatherData?.daily?.sunset[0])}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
