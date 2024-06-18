import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CalculatorPage from './pages/CalculatorPage';
import ScientificCalculatorPage from './pages/ScientificCalculatorPage';
import KidsCalculatorPage from './pages/KidsCalculatorPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CalculatorPage />} />
        <Route path="/scientific" element={<ScientificCalculatorPage />} />
        <Route path="/kids" element={<KidsCalculatorPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;