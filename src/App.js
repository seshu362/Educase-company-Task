import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount';
import AccountSettings from './components/AccountSettings';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="mobile-container">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/account-settings" element={<AccountSettings />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;