import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: ''
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
    const userData = {
      fullName: formData.fullName,
      email: formData.email
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    navigate('/account-settings');
  };

  return (
    <div className="create-account-container">
      <h1 className="create-account-title">
        Create your<br />
        PopX account
      </h1>
      
      <form onSubmit={handleSubmit} className="create-account-form">
        <div className="form-group">
          <input
            type="text"
            name="fullName"
            placeholder="Enter full name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">
            Full Name<span className="required">*</span>
          </label>
        </div>
        
        <div className="form-group">
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Enter phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="form-input"
          />
          <label className="form-label">
            Phone number<span className="required">*</span>
          </label>
        </div>
        
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
          <label className="form-label">
            Email address<span className="required">*</span>
          </label>
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
          <label className="form-label">
            Password<span className="required">*</span>
          </label>
        </div>
        
        <div className="form-group">
          <input
            type="text"
            name="companyName"
            placeholder="Enter company name"
            value={formData.companyName}
            onChange={handleChange}
            className="form-input"
          />
          <label className="form-label">Company name</label>
        </div>
        
        <div className="agency-section">
          <p className="agency-label">
            Are you an Agency?<span className="required">*</span>
          </p>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === 'yes'}
                onChange={handleChange}
                required
              />
              <span className="radio-custom"></span>
              <span className="radio-label">Yes</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === 'no'}
                onChange={handleChange}
                required
              />
              <span className="radio-custom"></span>
              <span className="radio-label">No</span>
            </label>
          </div>
        </div>
        
        <button type="submit" className="create-account-btn">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;