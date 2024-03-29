import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from './components/Base';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import About from './Pages/About';
import Signup from './Pages/Signup';
import Services from './Pages/Services';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (

   <BrowserRouter>
   <ToastContainer/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>} />  
    <Route path="/signup" element={<Signup/>} />  
    <Route path="/about" element={<About/>} />   
    <Route path="/services" element={<Services/>} />  

    

   </Routes>
   </BrowserRouter>


  );
}

export default App;
