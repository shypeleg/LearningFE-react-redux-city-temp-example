import axios from 'axios'
const WEATHER_API_KEY = '8d6ef181702ead76fd343ef3a57f46c9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/city?units=metric&APPID=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);
    
 //   let response = await request; mipmip?
//    console.log('requested',request);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}