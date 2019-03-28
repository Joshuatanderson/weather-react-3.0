import React from 'react';
import PropTypes from 'prop-types';

//receives relevant data for a single day as props

const CurrentWeatherBlock = ({description, windSpeed, humidity, day}) => {
    return(
        < div className = "tile is-child box has-background-info" >
            <p className = "title has-text-white">Today</p>
            <p className = "subtitle has-text-white">Conditions: {description}</p>
            <p className = "subtitle has-text-white">Windspeed: {windSpeed}</p>
            <p className = "subtitle has-text-white">Humidity: {humidity}</p>
        </div>
    );
}

CurrentWeatherBlock.propTypes = {
    description: PropTypes.string.isRequired,
}

export default CurrentWeatherBlock;