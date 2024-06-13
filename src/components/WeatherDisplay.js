import React from 'react'

function WeatherDisplay() {
  return (
    <div className='WeatherDiv'>
        <h1 style={{color: Temp > 20 ? "red" : "blue"} }>{Temp}C</h1>
        <p>{conditions}</p>
        <h4>{city}</h4>
    </div>
  )
}

export default WeatherDisplay