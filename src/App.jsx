import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Story from './pages/Story';
import Quiz from './pages/Quiz';
import Journal from './pages/Journal';
import Contact from './pages/Contact';
import Packaging from './pages/Packaging';
import QuickNav from './components/QuickNav';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <FloatingElements />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/story" element={<Story />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/packaging" element={<Packaging />} />
          </Routes>
        </main>
        <QuickNav />
        <Footer />
      </div>
    </Router>
  );
}

export default App; 