import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './navbar.css'


import { BrowserRouter as Router } from 'react-router-dom';

export default function Navbar() {
  return (
   
      <div className='nav'>
        <div className='nav-container'>
          <div className='nav-logo'>
            <CustomLink to='/background'>
              <h1>Park<span>Pal</span></h1>
            </CustomLink> 
          </div>
          <div className='nav-links'>
            <ul>
              <li>
                <CustomLink to='/parks'>Find a Park</CustomLink> 
              </li>
              <li>
                <CustomLink to='/about'>About</CustomLink> 
              </li>
            </ul>
          </div>
        </div>
      </div>
 
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}


