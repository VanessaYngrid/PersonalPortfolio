'use client'

import {useEffect, useState} from 'react';

//Define the interface for the weather data
interface WeatherData{
    time: string;
    temperature: number;
    description: string;
    feelLike: number;
    pop: number;
    wind: number;
}

export default function Weather(){
    //State to store weather data
    const [weatherData, setWeatherData] = useState<WeatherData>({
        time: "",
        temperature: 0,
        description: "",
        feelLike: 0,
        pop: 0,
        wind: 0,
    });

    //useEffect hook to fetch(buscar) weather data when component mounts
    useEffect(() => {
        //Fetch weather data asynchronously
        const fetchData = async () => {
            // Retrieve API key and base URL from environment variables
            //Use NEXT_PUBLIC_ to make environment variables accessible in the browser for client-side code
            const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
            const baseUrl = 'https://api.openweathermap.org/data/3.0/onecall';
            const lat = 45.5017; // Montreal's latitude
            const lon = -73.5673; // Montreal's longitude

            // Construct URL for weather API call
            const url = `${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

            try{
                //fetch weather data from the constructed URL
                const response = await fetch(url);
                
                //check if responde is sucessfull
                if(!response.ok){
                    throw new Error("Failed to fetch weather data");
                }

                //Parse responde data as JSON
                const data = await response.json();
                console.log('Weather API data:', data); // Log the data received from API

                //Extract relavant weather information from data
                const weather: WeatherData = {
                    time: new Date(data.current.dt * 1000).toLocaleTimeString(),
                    temperature: Math.round(data.current.temp),
                    description: data.current.weather[0].description,
                    feelLike: data.current.feels_like,
                    pop: Math.round(data.daily[0].pop*100),
                    wind: data.current.wind_speed,
                };

                //Update state with fetched weather data
                setWeatherData(weather);
            } catch (error) {
                // Log error to console if fetching data fails
                console.error('Error fetching weather data:', error);
            }
        };

        //Invoke fetchData function when component mounts
        fetchData();
    }, []);

    //<div className="bg-[#5E548E] p-4 shadow-md text-white">
    //Render weather data when available
    return (
        <div className="p-4 shadow-md text-white bg-gradient-to-r from-[#14002a] via-[#240046] to-purple-900 overflow-x-hidden" >
            {/* Heading for weather information */}
            <h2 className="text-l mb-4 text-center">Current Weather in Montreal, Canada</h2>
            <div className="grid grid-cols-2 gap-4">
                {/* First column with time and temperature */}
                <div className="flex flex-col items-end px-4">
                    <p className="text-l font-bold mb-2">{weatherData.time}</p>
                    <p className="text-3xl font-bold">{weatherData.temperature} °C</p>
                </div>
                {/* Second column with other weather details */}
                <div className="space-y-2 px-4">
                    <div className="flex items-center">
                        <p className="text-xs">Description: {weatherData.description}</p>
                    </div>
                    <div className="flex items-center">
                        {/* small -> sm */}
                        <p className="text-xs">Feels Like: {weatherData.feelLike} °C</p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-xs">P.O.P: {weatherData.pop} %</p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-xs">Wind Speed: {weatherData.wind} m/s</p>
                    </div>
                </div>
            </div>
        </div>
    );
}