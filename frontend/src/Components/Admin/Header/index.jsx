import React from 'react';
import { FaBars } from 'react-icons/fa';

const Header = ({ toggle }) => {
    return (
        <header className='header'>
          <nav className='navbar'>
            <div className='nav-icon' onClick={toggle}>
              <FaBars />
            </div>
            <div className='Logo'><h1>Admin Pannel</h1></div>
          </nav>
        </header>
    );
};
export default Header;
