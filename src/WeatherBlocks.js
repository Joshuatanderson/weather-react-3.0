import React from 'react';
import WeatherBlock from './WeatherBlock';
import CurrentWeatherBlock from './CurrentWeatherBlock'
import PropTypes from 'prop-types';

//receives relevant data
//passes relevant data for each day into the respective weather block
//passes a day value into each weather block

const WeatherBlocks = ({current, forecast, getDay}) => {
    return(
        <div className = "section">
            <div className = "container">
                <div className = "tile is-ancestor">
                    <div className = "tile is-parent is-vertical">
                        <CurrentWeatherBlock 
                           humidity = {current.humidity}
                           windSpeed = {current.gust_mph}
                           description = {current.condition.text}
                        />
                    </div>
                    <div className = "tile is-parent is-vertical">
                        <WeatherBlock 
                            key = {1}
                            id = {1}
                            day = {forecast[1].day}
                            dayOfWeek = {getDay(1)}
                        />
                        <WeatherBlock 
                            key = {2}
                            id = {2}
                            day = {forecast[2].day}
                            dayOfWeek = {getDay(2)}
                        />
                        <WeatherBlock 
                            key = {3}
                            id = {3}
                            day = {forecast[3].day}
                            dayOfWeek = {getDay(3)}

                        />
                    </div>
                    <div className = "tile is-parent is-vertical">
                        <WeatherBlock 
                            key = {4}
                            id = {4}
                            day = {forecast[4].day}
                            dayOfWeek = {getDay(4)}

                        />
                        <WeatherBlock 
                            key = {5}
                            id = {5}
                            day = {forecast[5].day}
                            dayOfWeek = {getDay(5)}

                        />
                        <WeatherBlock 
                            key = {6}
                            id = {6}
                            day = {forecast[6].day}
                            dayOfWeek = {getDay(6)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

WeatherBlocks.propTypes = {
    current: PropTypes.object,
    forecast: PropTypes.array
}

export default WeatherBlocks;