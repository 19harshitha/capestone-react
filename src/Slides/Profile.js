import Bio from '../Components/Profile/Bio'
import { useNavigate } from 'react-router-dom'
import Notes from '../Components/Profile/Notes'
import News from '../Components/Profile/News'
import Weather from '../Components/Profile/Weather'
import Countdown from '../Components/Profile/Countdown'
const Profile = ()=>{
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate('/List_app')
    }
    return (
        <div style={{height:"100vh",width:"100vw",background:"black",paddingLeft:"3vw",paddingTop:"3vh",boxSizing:"border-box"}}>
        <div style={{display:"flex",gap:"20px"}}>
        <div>
        <Bio/>
        <Weather/>
        <Countdown/>
        </div> 
        <div>
        <Notes/>
        </div> 
        <div>
        <News/>
        </div> 
        </div>
        <button style={{position:"absolute",bottom:"2vh",right:"3vw",
        background:"green",border:"none", fontSize:"1.2rem",
        color:"white",padding:"12px",borderRadius:"12px"}} onClick={handleClick}>Next Page</button> 
        </div>
         )
        }
        
        export default Profile