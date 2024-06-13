import React from 'react';
import PropTypes from 'prop-types';


function WeatherDisplay({ city, Temp, conditions }) {
  return (
    <div className='WeatherDiv'>
      <h1 style={{ color: Temp > 20 ? "red" : "blue" }}>{Temp}°C</h1>
      <p>{conditions}</p>
      <h4>{city}</h4>
    </div>
  );
}

WeatherDisplay.propTypes = {
  city: PropTypes.string.isRequired,
  Temp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  conditions: PropTypes.string.isRequired,
};

export default WeatherDisplay;
