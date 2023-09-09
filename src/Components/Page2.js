
import Group12 from "../images/Group12.png";
import Group13 from "../images/Group13.png";
import Group14 from "../images/Group14.png";
import Group11 from "../images/Group11.png";
import Group10 from "../images/Group10.png";
import Group9 from "../images/Group9.png";
import Group6 from "../images/Group6.png";
import Group7 from "../images/Group7.png";
import Group8 from "../images/Group8.png";
import Superapp from "../images/Superapp.png";
import p2dis from "../images/p2dis.png";
import "./Page2.css";
import Card from '../Components/Card';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const types = [
  {
      id:"Action",
      image:<img style={{width:"160px", height:"160px"}}  src={Group12}/>
  },
  {
      id:"Drama",
      image:<img style={{width:"160px", height:"160px"}}  src={Group13}/>
  },{
      id:"Romance",
      image:<img style={{width:"160px", height:"160px"}}  src={Group14}/>
  },
  {
      id:"Thriller",
      image:<img style={{width:"160px", height:"160px"}}  src={Group11}/>
  },
  {
      id:"Western",
      image:<img style={{width:"160px", height:"160px"}}  src={Group10}/>
  },
  {
      id:"Horror",
      image:<img style={{width:"160px", height:"160px"}}  src={Group9}/>
  },{
      id:"Fantasy",
      image:<img style={{width:"160px", height:"160px"}}  src={Group6}/>
  },{
      id:"Music",
      image:<img style={{width:"160px", height:"160px"}}  src={Group7}/>
  },{
      id:"Fiction",
      image:<img style={{width:"160px", height:"160px"}}  src={Group8}/>
  }
]
const Cat = ()=>{
  const [cate, setCate] = useState([])
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const handleNext = ()=>{
      if(cate.length<3){
          setError(true)
          return
      }else{
          setError(false)
          window.localStorage.setItem("genres", JSON.stringify([...cate]))
          navigate("/Bio")
      }
  }
  return (
      <div className='body'>
          <div className='left'>
          <img src={Superapp} width={"239px"} height={"90px"} id='b1' />
          <img src={p2dis} width={"400px"} height={"210px"} id='b2'/>
              <div style={{marginTop:"10vh"}}>
              <Card cate={cate} color={"green"}  setCate={setCate}/>
              {error?<p className='error'>Minimum 3 fields required</p>:<></>}
              </div>
          </div>
          <div className='right'>
              {types.map((data,un)=>
                  <Block data={data} un={un} cate={cate}  setCate={setCate}/>
              )}
          </div>
          <button className='next' onClick={handleNext}>Next Page</button>
      </div>
  )
}


const Block = ({data,un, setCate, cate})=>{
  const [selected, setSelected] = useState()
  const handleClick = (e)=>{
      if(cate.includes(data.id)){
          const index = cate.indexOf(data.id)
          cate.splice(index,1)
          setCate([...cate])
      }
      else{
          setCate([...cate,data.id])
      }
      setSelected(!selected)
  }
  useEffect(()=>{
      setSelected(cate.includes(data.id)==true)
  })
  return (
      <div data={data}  onClick={(e)=>handleClick(e)}  key={un} >  
          {data.image}
      </div>
  )
} 
export default Cat