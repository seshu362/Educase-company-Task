import React, { useEffect, useState } from 'react';
import './index.css';

const AccountSettings = () => {
  const [userData, setUserData] = useState({
    fullName: '',
    email: ''
  });

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="account-settings-container">
      <h1 className="account-settings-title">Account Settings</h1>
      
      <div className="profile-section">
        <div className="profile-image-container">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
            alt="Profile" 
            className="profile-image"
          />
          <div className="camera-icon">
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
              <path d="M13 10.5C13 11.0523 12.5523 11.5 12 11.5H2C1.44772 11.5 1 11.0523 1 10.5V4.5C1 3.94772 1.44772 3.5 2 3.5H3.5L4.5 1.5H9.5L10.5 3.5H12C12.5523 3.5 13 3.94772 13 4.5V10.5Z" stroke="white" strokeWidth="1.5"/>
              <circle cx="7" cy="7" r="2.5" stroke="white" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>
        
        <div className="profile-info">
          <h2 className="profile-name">{userData.fullName || 'Marry Doe'}</h2>
          <p className="profile-email">{userData.email || 'Marry@Gmail.Com'}</p>
        </div>
      </div>
      
      <p className="profile-description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing 
        Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut 
        Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
};

export default AccountSettings;