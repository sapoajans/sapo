import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import GoogleMap from './components/GoogleMap';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import PortfolioDetail from './components/PortfolioDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path="/" element={
          <div className="bg-black text-white min-h-screen">
            <Header />
            <Hero />
            <Services />
            <Portfolio />
            <WhyChooseUs />
            <GoogleMap />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;