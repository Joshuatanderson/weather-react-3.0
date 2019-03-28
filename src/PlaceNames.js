import React from 'react';
import PropTypes from 'prop-types';

const PlaceNames = ({city, country}) => {
    return(
        <div className = "container">
            <p className = "title" >{city}</p>
            <p className = "subtitle" >{country}</p>
        </div>
    );
}

PlaceNames.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
}

export default PlaceNames;