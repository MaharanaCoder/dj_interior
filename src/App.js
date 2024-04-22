import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import  { ContactForm } from './components/contactus';

export const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactForm />} />
        {/* <Redirect to ="/" /> */}
        <Route path="*" element={<Home />}/>

      </Routes>
    </Router>
  );
};

export default App;
