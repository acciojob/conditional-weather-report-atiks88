import React from 'react';


function WeatherDisplay({ weather }) {

  const { temperature, conditions } = weather;
  const textColor = temperature > 20 ? 'red' : 'blue';

  return (
    <div className='WeatherDiv'>
       <h1 style={{ color: textColor }}>{temperature}°C</h1>
       <p>Conditions: {conditions}</p>
      <h4>{city}</h4>
    </div>
  );
}


export default WeatherDisplay;
