import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SpecficCityWeather = () => {

    const [inputValue, setInputValue] = useState('');
    const [weatherResults, setWeatherResponse] = useState(null);
    const [isLoading, setLoading] = useState(true);


    const fetchWeatherResponse = async () => {
        const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
            validateStatus: (status) => {
                if(status === 404){
                    alert('NE PISI GLUPOSTI --> there is no city with that name');
                }
                return status
            },
            params: {
                q: inputValue,
                units: 'metric',
                appid: 'd67acf1ce2f0215f5d5a8885c6329ba9',
                lang: 'HR'
            }
        });
        if (response.status === 200) {
            setWeatherResponse(response);
            setLoading(false);
        }
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        fetchWeatherResponse();

    }

    if (isLoading) {
        return (
            <div className="card text-dark bg-light mb-3" style={{ maxWidth: '40rem', marginTop: '20px' }}>
                <div className="card-header">Enter city name belowe </div>
                <div className="card-body">
                    <form onSubmit={onFormSubmit}>
                        <div className="mb-3">
                            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" className="form-control" placeholder="city name" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="card text-dark bg-light mb-3" style={{ maxWidth: '40rem', marginTop: '20px' }}>
                <div className="card-header">Enter city name belowe </div>
                <div className="card-body">
                    <form onSubmit={onFormSubmit}>
                        <div className="mb-3">
                            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" className="form-control" placeholder="city name" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="card" style={{ width: '50rem', marginTop: '50px', marginBottom: '10px' }}>
                <img src="https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Current weather at: {weatherResults.data.name}</h5>
                    <hr />
                    <p className="card-text">current temperature: {weatherResults.data.main.temp} °C</p>
                    <p className="card-text">fells like: {weatherResults.data.main.feels_like} °C</p>
                    <p className="card-text">humidity: {weatherResults.data.main.humidity} %</p>
                    <p className="card-text">pressure: {weatherResults.data.main.pressure} hPa</p>
                </div>
            </div>
        </div>


    );
}

export default SpecficCityWeather;