
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './components/Navbar'
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import News from './components/Pages/News/News.jsx';
import NotFound from './components/Pages/NotFoundPage/NotFound';
import ComingSoon from './components/Pages/ComingSoonPage/ComingSoon';
import About from './components/Pages/AboutPage/About';
import Contact from './components/Pages/ContactPages/Contact';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Loader } from "react-spinners";
import Map from './components/Pages/MapPage/MapContainer';



function App(isloading) {

  return (
    <>
    
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/news' element={<News/>}  />
    <Route path='*' element={<NotFound/>} />
    <Route path='/next' element={<ComingSoon/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path="/map"  element={<Map/>}  />
  </Routes>

  
  </BrowserRouter>
</>
  );
}

export default App;
