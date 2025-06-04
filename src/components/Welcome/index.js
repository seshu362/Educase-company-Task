import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to PopX</h1>
        <p className="welcome-description">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>
      </div>
      <div className="welcome-buttons">
        <button 
          className="btn btn-primary"
          onClick={() => navigate('/create-account')}
        >
          Create Account
        </button>
        <button 
          className="btn btn-secondary"
          onClick={() => navigate('/signin')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Welcome;