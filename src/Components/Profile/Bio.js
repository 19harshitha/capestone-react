import React from 'react'
import image14 from "../../images/image14.png"
import "./Bio.css";


const Bio = () => {
  const bio = JSON.parse(window.localStorage.getItem("task"))
  const genre = JSON.parse(window.localStorage.getItem("genres"))
  return (
    <div className='top1'>
      <div >
      <img src={image14}  id='part1'/>
      </div>
      <div className='part2'>
        <p style={{color:"white", marginLeft:"30px" }}> {bio.Name} </p>
        <p  style={{color:"white", marginLeft:"30px"}}>  {bio.Email} </p>
        <p style={{color:"white", marginLeft:"30px"}}> {bio.User} </p>
        <Card cate= {genre}/>
      </div>
    </div>
  )
}

const Card = ({cate})=>{
  return(
      <div style={{width:"20vw"}}>
     {cate.map((category)=>(
              <button id='in'>{category} </button>
               
      ))}
      </div>
  )
}

export default Bio
