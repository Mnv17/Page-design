import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { BillingPage } from './Components/BillingPage';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/billing" element={<BillingPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
