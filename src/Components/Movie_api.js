import React from 'react'
import "./Movie_api.css"
import Superapp from "../images/Superapp.png";
import img14 from "../images/img14.png";
import { useNavigate } from 'react-router-dom'

const Movie_api = () => {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate('/Page2')
    }

  return (
    <div className='bc'>
        <div className='piece'>
        <div className='title'>
  <img src={Superapp} width={"200px"} height={"60px"} style={{marginTop:"30px",marginLeft:"40px"}}/>
  <h2 style={{color:"white",marginTop:"20px",marginLeft:"50px"}}>Entertainment according to your choice</h2>
  </div>
  <div className='icon'>
 <img src={img14} width={"100px"} height={"90px"}  />
 </div>
 
 </div>

 <div>

 </div>
 <div>

 </div>
 <div>

 </div>
 <button style={{position:"absolute",bottom:"2vh",right:"3vw",
        background:"green",border:"none", fontSize:"1.2rem",
        color:"white",padding:"12px",borderRadius:"12px"}} onClick={handleClick}>Browse</button> 
    </div>
  )
}

export default Movie_api