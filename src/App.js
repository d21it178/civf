
import './App.css';
import Navbar from './component/navbar';

import Home from './pages/home';
import Aboutus from './pages/aboutus';
import Acceleration_Program from './pages/Acceleration_Program';
import Gallery from './pages/Gallery';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Acceleration_Program" element={<Acceleration_Program />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
      
    </BrowserRouter>

  );
}

export default App;
