import { useEffect, useState } from "react"
import "./Cloudy.css";
import axios from 'axios';

const Weather = ()=>{
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [weather, setWeather] = useState(false)
    
    useEffect(()=>{
        const apiUrl = `http://api.weatherapi.com/v1/current.json?key=2b32fac0499f444abb962125231009&q=Bangalore`;

    axios.get(apiUrl)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, [ ]);



    useEffect(()=>{
        const date = new Date
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        setTime(strTime)
    })
    useEffect(()=>{
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;  
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '-' + mm + '-' + yyyy;
        setDate(formattedToday)
    })
    return (
        <div className="mist">
            <div className="rai">
                <span style={{color:"white"}}>{date}</span>
                <span style={{color:"white"}}>{time}</span>
            </div>
            <div>
                {weather ?<div className="res" > <div>
                    <img src={weather.current.condition.icon} style={{width:"30px",height:"30px"}}/>
                    <p style={{marginLeft:"2px"}}>{weather.current.condition.text}</p>
                </div>
                <div>
                   <p className="show"><span>{weather.current.temp_c}</span>C</p>
                    <p style={{marginLeft:"2px"}}>{weather.current.pressure_mb} pressure</p>
                </div>
                <div>
                    <p className="show">{weather.current.wind_kph} wind</p>
                    <p style={{marginLeft:"34px"}}>{weather.current.humidity} humidity</p>
                </div></div>:<></>}
              </div>
        </div>
    )
}

export default Weather
