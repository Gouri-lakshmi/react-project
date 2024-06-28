import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCog, faUser, faUserGroup, faHouse, faLink, faMessage, faFolderPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home'); // State to track active link

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">Advocase</div>
        <div className="navbar-center">
          <ul className="navbar-links">
            <li><a href="news-feed"><FontAwesomeIcon icon={faFolderPlus} className='icon-outline' /><span>News Feed</span></a></li>
            <li><a href="/" className={activeLink === 'home' ? 'active' : ''} onClick={() => setActiveLink('home')}>
              <FontAwesomeIcon icon={ faHouse} className='icon-outline' /><span>Home</span></a></li>
            <li><a href="findlawyers" className={activeLink === 'find-lawyers' ? 'active' : ''} onClick={() => setActiveLink('find-lawyers')}>
              <FontAwesomeIcon icon={faUserGroup} className='icon-outline' /><span>Find Lawyers</span></a></li>
            <li><a href="connections" className={activeLink === 'connections' ? 'active' : ''} onClick={() => setActiveLink('connections')}>
              <FontAwesomeIcon icon={faLink} className='icon-outline' /><span>Connections</span></a></li>
            <li><a href="chats" className={activeLink === 'chats' ? 'active' : ''} onClick={() => setActiveLink('chats')}>
              <FontAwesomeIcon icon={faMessage} className='icon-outline' /><span>Chats</span></a></li>
          </ul>
        </div>
        <div className="navbar-right">
          <a href="notification"><FontAwesomeIcon icon={faBell} /></a>
          <a href="settings"><FontAwesomeIcon icon={faCog} /></a>
          <a href="user"><FontAwesomeIcon icon={faUser} /></a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
