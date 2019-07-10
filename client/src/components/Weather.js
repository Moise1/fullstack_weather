import React from 'react'
import {
    Row, Col, Table
} from 'reactstrap';

const  Weather = props => {
    
    const {myWeather} = props
     
    if(!myWeather) return <div></div>

    return (
        <Row className="weather">
            <Col sm="12" md={{size: 4, offset: 4}}>
                <h2>{myWeather.data.name}</h2>
                <img src={`http://openweathermap.org/img/w/${myWeather.data.weather[0].icon}.png`} alt="Weather Icon"/> 
                <span>{myWeather.data.weather[0].main}</span>&nbsp;
                <span>{Math.floor(myWeather.data.main.temp)}&deg; F</span>
                <Table>
                    <tbody>
                        <tr>
                            <td>Wind</td>
                            <td>{Math.floor(myWeather.data.wind.speed)} km/h</td> 
                        </tr>
                        <tr>
                            <td>Pressure</td>
                            <td>{myWeather.data.main.pressure} hPa</td> 
                            
                        </tr>
                        <tr>
                            <td>Humidity</td>
                            <td>{myWeather.data.main.humidity} %</td> 
                        </tr>

                        <tr>
                            <td>Min Temp</td>
                            <td>{Math.floor(myWeather.data.main.temp_min)}&deg; F</td> 
                        </tr>

                        <tr>
                            <td>Max Temp</td>
                            <td>{Math.floor(myWeather.data.main.temp_max)}&deg;   F</td> 
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default Weather; 