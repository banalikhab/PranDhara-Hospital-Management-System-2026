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
import AllDoctors from './pages/Doctors/AllDoctors';
import Appointment from './pages/Doctors/Appointment';
import UserProfile from './pages/User/UserProfile';


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
          <Route path="/doctors" element={<AllDoctors/>}/>
          <Route path="/doctors/:id" element={<Appointment/>}/>
          <Route path="/user/profile" element={<UserProfile/>}/>
        </Routes>
      </main>
      
      <Footer/>
    </>
  )
}

export default App;
