import axios from 'axios';

const API_KEY = '27fe325883f355f673ee3ca20bce28c8';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
                                  
export function fetchWeather(city) {

	const url = `${ROOT_URL}&q=${city},india`;
	const request = axios.get(url);


	return {
		type: FETCH_WEATHER,
		payload: request
	};
} 