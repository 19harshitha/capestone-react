
const Card = ({id,setCate,cate})=>{
    const handleClick = ()=>{
         const index = cate.indexOf(id)
            cate.splice(index,1)
            setCate([...cate])
    }
    return(
        <div >
       {cate.map((category)=>(
                <button id="ip" onClick={handleClick}>{category}  
                <span style={{color:"black", marginLeft:"4px"}}>X</span></button>
        ))}
        </div>
    )
}

export default Card