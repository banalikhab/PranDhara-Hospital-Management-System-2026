import './App.css';
import Navbar from './Components/Layout/Navbar/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import { Routes,Route } from 'react-router';
import Footer from './Components/Layout/Footer/Footer';
import GalleryPage from './pages/Gallery/GalleryPage';
import Register from './pages/Authentication/Register';
import {Toaster} from 'react-hot-toast';
import Login from './pages/Authentication/Login';


function App() {
  return (
    <>
      <Navbar/>
      <Toaster/>
      
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/gallery" element={<GalleryPage/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </main>
      
      <Footer/>
    </>
  )
}

export default App;
