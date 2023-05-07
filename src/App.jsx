import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
  return (
    <>
      
      <Router>
         <Navbar />
          <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/about' element={ <About /> } />
              <Route path='/service' element={ <Service /> } />
              <Route path='/contact' element={ <Contact /> } />
              <Route path='/*' element={ <Navigate to="/" /> } />
          </Routes>
          <Footer />
      </Router>
    </>
  )
}

export default App;