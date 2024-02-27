"use client";
import React, { useEffect, useState } from 'react';

interface ForecastData {
    current: {
        relative_humidity_2m: number;
        wind_speed_10m: number;
        temperature_2m: number;
    }
}

const Body = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [forecastData, setForecastData] = useState<ForecastData | null>(null);

    const latitude = '45.5234';
    const longitude = '-122.6762';
    const currentParams = 'temperature_2m,wind_speed_10m,relative_humidity_2m';

    useEffect(() => {
        const fetchForecastData = async () => {
            try {
                const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=${currentParams}`;
                const response = await fetch(url);
                
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
    
                const data = await response.json();
                console.log('Fetched data:', data);
                setForecastData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchForecastData();

        const date = new Date().toLocaleString('en-US', {
            weekday: 'long',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
        
        const [dayOfWeek, month, day, year, time] = date.split(', ');
        setCurrentDate(`It's ${dayOfWeek}, ${month} ${day}, ${year}, at ${time}`);
        
        console.log("date", date)
        setCurrentDate(`It's ${date}, at`);
    }, []);

    const CtoF = () => {
        if (forecastData && forecastData.current && forecastData.current.temperature_2m !== undefined) {
            return Math.floor((forecastData.current.temperature_2m * 9/5) + 32);
        } else {
            return "Unknown Temperature!"
        }
    };
    

    return (
        <section className="bodyflex items-center justify-center h-screen">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 card-wrapper">
                <div className="card-one p-8" style={{ height: '300px', padding: '0' }}>
                    {currentDate ? <h2 className="text-xl font-semibold mb-2">{currentDate}</h2>: <p>...Loading</p>}
                </div>
                <div className="bg-gray rounded-lg shadow-md p-8 card-two " style={{ height: '300px' }}>
                    <h4 className="text-xl font-semibold mb-2">About me</h4>
                    <p className="text-gray-600">I enjoy music🎵, Chicken Tikka Masala🥣, movies🎞️ and coding👨‍💻. </p>
                    <p>My favorite dev tools are NextJs, React, Vanilla JavaScript and Ruby.</p>
                </div>
                <div className="bg-gray rounded-lg shadow-md p-8 card-three" style={{ height: '300px' }}>
                    {forecastData ? <p>Portland, Oregon</p> : <p>... Loading</p>}
                    {forecastData && <h2 className="text-xl font-semibold mb-2">{CtoF()}°</h2> }
                    {forecastData && <p>Wind Speed: {forecastData?.current.wind_speed_10m}km/h</p>}
                    {forecastData && <p>Humidity: {forecastData?.current.relative_humidity_2m}%</p>}
                </div>
                <div className="bg-gray rounded-lg shadow-md p-8 card-four" style={{ height: '300px' }}>
                    <h4 className="text-xl font-semibold mb-2">Rabbit Fact</h4>
                    <p className="text-gray-600">Rabbits use different sounds such as grunts, purrs, and thumps to convey messages to other rabbits and even to their human companions. This complex communication system helps rabbits socialize, establish hierarchy within their groups, and express their emotions effectively.</p>
                </div>
            </div>
        </section>
    );
};

export default Body;
