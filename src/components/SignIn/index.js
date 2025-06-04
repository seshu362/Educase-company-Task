import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store user data in localStorage for demo
    const userData = {
      fullName: 'Marry Doe',
      email: formData.email
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    navigate('/account-settings');
  };

  return (
    <div className="signin-container">
      <h1 className="signin-title">
        Signin to your<br />
        PopX account
      </h1>
      <p className="signin-description">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit,
      </p>
      
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Email Address</label>
        </div>
        
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">Password</label>
        </div>
        
        <button type="submit" className="signin-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;