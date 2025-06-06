import arrow from '../assets/arrow.png';
import { useNavigate } from 'react-router';
import { useEffect, useState } from '@lynx-js/react'
import { WEATHER_API_KEY, LOCATION } from '../constant.ts';

const Weather = () => {
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const apiKey = WEATHER_API_KEY;
        const location = LOCATION || 'London';
        

        fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`)
            .then((res) => res.json())
            .then((data) => {
                console.info('Weather data:', data);
                setWeather(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Failed to fetch weather', err)
                setLoading(false);
            })
    }, [])

    if (loading) return <text>Loading...</text>

    if (!weather) return <text>Failed to load weather.</text>

    return (
        <view className="container" style="padding: 10px;">
            <image bindtap={() => navigate('/')} src={arrow} className="Arrow" style={{transform: 'rotate(270deg)'}}/>
            <view style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; margin-top: 70px">
                <text style="color: #fafafa; font-size: 35px;">{weather.location.country}</text>
                <text style="color: #fafafa; font-size: 70px;">{weather.current.temp_c}°</text>
                <view style="display: flex; flex-direction: row; align-items: center; justify-content: center; gap: 5px">
                    <text style="color: #b9b8b9; font-size: 20px">{weather.current.condition.text}</text>
                    <image src={`https:${weather.current.condition.icon}`} style="width: 24px; height: 24px" /> 
                </view>
                <text style="color: #b9b8b9; font-size: 20px">Feels like {weather.current.feelslike_c}°</text>
                <text style="color: #b9b8b9; font-size: 20px">Humidity: {weather.current.humidity}%</text>
                <text style="color: #b9b8b9; font-size: 20px">Wind: {weather.current.wind_kph} kph</text>
                <text style="color: #b9b8b9; font-size: 15px">Last updated: {weather.current.last_updated}</text>
            </view>
        </view>
    )
}

export default Weather;