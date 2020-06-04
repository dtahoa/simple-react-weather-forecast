import { Weather } from '../types';
const API_URL = process.env.REACT_APP_API_URL || 'https://api.openweathermap.org/data/2.5';
const API_KEY = process.env.REACT_APP_API_KEY || '84777e8df3b215d48d552278b4bc99ec';

// eslint-disable-next-line
function handleResponse(response: any) {
  if (response.ok) {
    return response.json();
  }
  throw new Error(`Error: City name ${response.statusText}`);
}

/**
 * Fetch current weather by city name
 * @param city
 */
async function getWeather(city: string) {
  const res = await fetch(`${API_URL}/weather/?q=${city}&units=metric&APPID=${API_KEY}`);
  const weather = handleResponse(res);
  if (Object.entries(weather).length) {
    const mappedData = mapDataToWeatherInterface(weather);
    return mappedData;
  }
  return weather;
}

/**
 * Fetch forecast by city name
 * @param city 
 */
async function getForecast(city: String) {
  const res = await fetch(`${API_URL}/forecast/?q=${city}&units=metric&APPID=${API_KEY}`);
  const result = handleResponse(res);
  if (Object.entries(result).length) {
    const forecast = [];
    for (let i = 0; i < result.list.length; i += 8) {
      forecast.push(mapDataToWeatherInterface(result.list[i + 4]));
    }
    return forecast;
  }
  return result;
}

/**
 * Map data from API to weather interface
 * @param data 
 */
function mapDataToWeatherInterface(data: Weather) {
  const mapped = {
    city: data.name,
    country: data.sys.country,
    date: data.dt * 1000,
    humidity: data.main.humidity,
    icon_id: data.weather ? data.weather[0].id : 0,
    temperature: data.main.temp,
    description: data.weather && data.weather[0].description,
    wind_speed: Math.round(data.wind.speed * 3.6), // convert from m/s to km/h
    condition: data.cod,
    dt_txt: data.dt_txt ? data.dt_txt : '',
    icon: data.weather ? data.weather[0].icon : '',
    max: data.main.temp_max,
    min: data.main.temp_min,
  };

  // Add extra properties for the five day forecast: dt_txt, icon, min, max
  if (data.dt_txt) {
    mapped.dt_txt = data.dt_txt;
  }

  if (data.weather && data.weather[0].icon) {
    mapped.icon = data.weather[0].icon;
  }

  if (data.main.temp_min && data.main.temp_max) {
    mapped.max = data.main.temp_max;
    mapped.min = data.main.temp_min;
  }

  return mapped;
}

export { getWeather, getForecast, handleResponse, mapDataToWeatherInterface };
