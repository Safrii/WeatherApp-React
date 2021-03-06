import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import CurrentWeather from './CurrentWeather';
import SpecficCityWeather from './SpecificCityWeather';




const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Weather App</Link>
                                </li>
                                <li>
                                    <Link className="nav-link active" aria-current="page" to="/specific-city">Weather for specific city</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div>
                    <Route path="/" exact component={CurrentWeather} />
                    <Route path="/specific-city" exact component={SpecficCityWeather} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;

