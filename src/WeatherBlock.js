import React from 'react';
import PropTypes from 'prop-types';

const WeatherBlock = ({day, dayOfWeek}) => {
    return(
        <div className = "tile is-child box">
            <p className = "subtitle">{dayOfWeek}</p>
            <p>Low: {day.mintemp_f}</p>
            <p>High: {day.maxtemp_f}</p>
            <p>Humidity: {day.avghumidity}</p>
        </div>
    );
}

WeatherBlock.propTypes = {
    day: PropTypes.object.isRequired
}

export default WeatherBlock;