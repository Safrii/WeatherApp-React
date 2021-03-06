import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {usePosition} from 'use-position';

const CurrentWeather = () => {

    const {latitude ,longitude} = usePosition();

    const [weatherResults, setWeatherResponse] = useState(null);
    const [isLoading, setLoading] = useState(true);
  
    const fetchWeatherResponse = async () => {
        const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
            params: {
                lat: latitude,
                lon: longitude,
                units: 'metric',
                appid: 'd67acf1ce2f0215f5d5a8885c6329ba9',
                lang: 'HR'
            }
        });
        setWeatherResponse(response)
        setLoading(false);

    }

    const refreshData = () => {
        setLoading(true);
        fetchWeatherResponse();
    }

    useEffect(() => {
        if(latitude && longitude){
            fetchWeatherResponse();
        }
       
    }, [latitude,longitude]);

    if (isLoading) {
        return (
            <div className="card" style={{ width: '50rem', marginTop: '50px' }}>
                <img src="https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg" className="card-img-top" />
                <div className="card-body">
                    <div className="d-flex justify-content-center">
                        <div onClick={refreshData} className="spinner-border" role="status"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="card" style={{ width: '50rem', marginTop: '50px' }}>
            <img src="https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">Current weather at your place: {weatherResults.data.name}</h5>
                <hr />
                <p className="card-text">current temperature: {weatherResults.data.main.temp} °C</p>
                <p className="card-text">fells like: {weatherResults.data.main.feels_like} °C</p>
                <p className="card-text">humidity: {weatherResults.data.main.humidity} %</p>
                <p className="card-text">pressure: {weatherResults.data.main.pressure} hPa</p>
                <button onClick={refreshData} className="btn btn-outline-secondary">Refresh</button>
            </div>
        </div>
    );
}

export default CurrentWeather;