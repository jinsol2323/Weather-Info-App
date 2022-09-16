import React from 'react'
import { Button } from 'react-bootstrap';


const WeatherButton = ({cities,setCity}) => {
  return (
    <div>

        <Button variant="warning" className='weatherBtn' onClick={()=>setCity('')}>Current Location</Button>

        {cities.map((item,index)=>( 
            <Button 
                variant="warning" 
                className='weatherBtn'
                key={index}
                onClick={()=>setCity(item)}
                >
                {item}
            </Button>
        ))}
    
    </div>
    )
}

export default WeatherButton