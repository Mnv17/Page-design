// Navbar.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./Navbar.css";
import { FaRegSquare } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { SlEnvolope } from "react-icons/sl";
import { SlWallet } from "react-icons/sl";
import { IoAppsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

export const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path.includes('general')) setSelectedItem('general');
    else if (path.includes('password')) setSelectedItem('password');
    else if (path.includes('invitations')) setSelectedItem('invitations');
    else if (path.includes('billing')) setSelectedItem('billing');
    else if (path.includes('apps')) setSelectedItem('apps');
  }, [location.pathname]);

  const handleClick = (item) => {
    setSelectedItem(item);
    if (item === 'general') {
      navigate('/general');
    } else if (item === 'password') {
      navigate('/password');
    } else if (item === 'invitations') {
      navigate('/invitations');
    } else if (item === 'billing') {
      navigate('/billing');
    } else if (item === 'apps') {
      navigate('/apps');
    }
  };

  return (
    <div className='container'>
      <div className='profile-container'>
        <img src="https://static6.depositphotos.com/1003410/577/i/950/depositphotos_5771889-stock-photo-business-woman-in-glasses.jpg" alt="Ildiko Gasper" className='profile-image' />
        <div className='profile-text'>
          <h4>Ildiko Gasper</h4>
          <p style={{color: "#8483A9"}}>@igasper</p>
        </div>
      </div>

      <div className='navbar'>
        <div className={`nav-item ${selectedItem === 'general' ? 'selected' : ''}`} onClick={() => handleClick('general')}>
          <FaRegSquare />
          <p>General</p>
        </div>
        <div className={`nav-item ${selectedItem === 'password' ? 'selected' : ''}`} onClick={() => handleClick('password')}>
          <CiLock />
          <p>Password</p>
        </div>
        <div className={`nav-item ${selectedItem === 'invitations' ? 'selected' : ''}`} onClick={() => handleClick('invitations')}>
          <SlEnvolope />
          <p>Invitations</p>
        </div>
        <div className={`nav-item ${selectedItem === 'billing' ? 'selected' : ''}`} onClick={() => handleClick('billing')}>
          <SlWallet />
          <p>Billing</p>
        </div>
        <div className={`nav-item ${selectedItem === 'apps' ? 'selected' : ''}`} onClick={() => handleClick('apps')}>
          <IoAppsOutline />
          <p>Apps</p>
        </div>
      </div>

      <div className='logout-button'>
        <IoLogOutOutline style={{color: "#8483A9"}} />
        <p style={{color: "#8483A9"}}>Log out</p>
      </div>
    </div>
  );
};
