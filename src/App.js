
import Sign from './Components/Sign';
import { Routes,Route } from 'react-router-dom';
import Page2 from './Components/Page2';
import Bio from "./Slides/Profile";
import Movie_api from './Components/Movie_api';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    
   <div className='App'>
    <BrowserRouter>
   <Routes>
   <Route path='/'element={<Sign/>}   />
    <Route path='/Page2'element={<Page2/>}/>
    <Route path='/Bio'element={<Bio/>}   />
    <Route path='/Movie_api'element={<Movie_api/>}   />
   </Routes>
   </BrowserRouter>
   </div>
    
  );
}

export default App;
