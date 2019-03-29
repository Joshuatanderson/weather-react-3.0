import React from 'react';
import PropTypes from 'prop-types';

const WeatherBlock = ({day, dayOfWeek, getIcon}) => {
    return(
        <div className = "tile is-child box">
            <p className = "subtitle">{dayOfWeek}</p>
            <p>Low: {day.mintemp_f}</p>
            <p>High: {day.maxtemp_f}</p>
            <p>Humidity: {day.avghumidity}</p>
            {getIcon(day.condition.icon)}
        </div>
    );
}

WeatherBlock.propTypes = {
    day: PropTypes.object.isRequired,
    getIcon: PropTypes.func.isRequired
}

export default WeatherBlock;