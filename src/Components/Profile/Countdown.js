import Vector from "../../images/Vector.png"
import Vector2 from "../../images/Vector2.png"
import "./Countdown.css"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useState } from 'react'

const Timer = ()=>{
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [playing, setPlaying] = useState(false)
    const increaseSecond = ()=>{
        if(seconds==59){
            return
        }
        setSeconds((sec)=>sec+1)
    }
        const increaseMinute = ()=>{
        if(minutes==59){
            return
        }
        setMinutes((min)=>min+1)
    }
        const increaseHour = ()=>{
        setHours((hours)=>hours+1)
    }
    const decreaseSecond = ()=>{
        if(seconds==0){
            return
        }
        setSeconds((sec)=>sec-1)
    }
        const decreaseMinute = ()=>{
        if(minutes==0){
            return
        }
        setMinutes((min)=>min-1)
    }
        const decreaseHour = ()=>{
        if(hours==0){
            return
        }
        setHours((hours)=>hours-1)
    }

    function toHoursAndMinutes(totalSeconds) {
  const totalMinutes = Math.floor(totalSeconds / 60);

  const seconds = totalSeconds % 60;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}:${minutes}:${seconds}`;
}

    return (
        <div className="lap">
            <div>
                <CountdownCircleTimer
                isPlaying={playing}
                duration={seconds+minutes*60+hours*60*60}
                colors={["#FF6A6A"]}
            >
                {({ remainingTime }) =>
                <span style={{color:"white",fontSize:"1.5rem"}}>{toHoursAndMinutes(remainingTime)}</span>}
            </CountdownCircleTimer>
            </div>
            <div className="mon" >
                <div className="tue">
                    <div className="h2">
                        <p id="d2">Hours</p>
                        <img src= {Vector}  onClick={increaseHour}   />
                        <p style={{marginLeft:"2px"}}>{hours}</p>
                        <img src= {Vector2}  onClick={decreaseHour}  />
                    </div>
                    <div className="h2">
                        <p id="d2"> Minutes</p>
                        <img src= {Vector}  onClick={increaseMinute}  />
                        <p style={{marginLeft:"2px"}}>{minutes}</p>
                        <img src= {Vector2}  onClick={decreaseMinute}  />
                    </div>
                   <div className="h2">
                        <p id="d2">Seconds</p>
                        <img src= {Vector}  onClick={increaseSecond}  />
                        <p style={{marginLeft:"2px"}}>{seconds}</p>
                        <img src= {Vector2}  onClick={decreaseSecond}  />
                    </div>
                </div>
                <div  className="press" onClick={()=>setPlaying((prev)=>!prev)} >
                    {playing?<p>Pause</p>:<p>Start</p>}
                </div>
            </div>
        </div>
    )
}
export default Timer