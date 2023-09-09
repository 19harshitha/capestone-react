import { useState } from "react"

const Notes = ()=>{
    const [text, setText] = useState(JSON.parse(window.localStorage.getItem("text")))
    const handleChange=(e)=>{
        setText(e.target.value)
        window.localStorage.setItem("text",JSON.stringify(text))
    }
    return(
        <div style={{
        background:"#F1C75B",height:"58vh",
        width:"30vw",  
        borderRadius:"12px", padding:"6px"}}>
         <p style={{color:"black",marginLeft:"40px" ,fontSize:"2rem"}}>All notes</p>
         <textarea style={{width:"26vw", height:"40vh", marginLeft:"40px",fontSize:"20px",
        marginTop:"20px" , border:"none",background:"transparent", outline: 0, resize:"none"}} 
         value={text} onChange={(e)=>handleChange(e)}/>
         
        </div>
     )
 }
 
 export default Notes