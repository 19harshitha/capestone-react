
import Sign from './Components/Sign';
import { Routes,Route } from 'react-router-dom';
import Page2 from './Components/Page2';
import Bio from "./Slides/Profile";
import Movie_api from './Components/Movie_api';

function App() {
  return (
    
   <div className='App'>
   
   <Routes>
   <Route path='/'element={<Sign/>}   />
    <Route path='/Page2'element={<Page2/>}/>
    <Route path='/Bio'element={<Bio/>}   />
    <Route path='/Movie_api'element={<Movie_api/>}   />
   </Routes>
   </div>
    
  );
}

export default App;
