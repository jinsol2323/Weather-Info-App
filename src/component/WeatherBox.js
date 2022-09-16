import React from 'react'

const WeatherBox = ({weather}) => {

    console.log("weathr?",weather);
  return (
    <div className='weatherBox'>
        {/* {weather?.name} */}
        <div>[{weather && weather.name}]</div>
        <div className='tempStyle'>{weather && weather.main.temp}도</div>
        <div className='tempStyle'>최저 온도 : {weather && weather.main.temp_min}도</div>
        <div className='tempStyle'>최대 온도 : {weather && weather.main.temp_max}도</div>
        <div className='weatherDescription'>{weather && weather.weather[0].description}</div>
    </div>
 )
};



export default WeatherBox;