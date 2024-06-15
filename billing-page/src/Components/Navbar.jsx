// Navbar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const handleClick = (item) => {
    setSelectedItem(item);
    if (item === 'billing') {
      navigate('/billing');
    }
    // Add more navigation logic for other items if needed
  };

  return (
    <div className='container'>
      <div className='profile-container'>
        <img src="https://static6.depositphotos.com/1003410/577/i/950/depositphotos_5771889-stock-photo-business-woman-in-glasses.jpg" alt="Ildiko Gasper" className='profile-image' />
        <div className='profile-text'>
          <h4>Ildiko Gasper</h4>
          <p>@igasper</p>
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
        <IoLogOutOutline />
        <p>Log out</p>
      </div>
    </div>
  );
};
