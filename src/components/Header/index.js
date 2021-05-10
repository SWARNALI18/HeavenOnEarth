import React from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="#">Home</a>
            <a href="#">Log In</a>
            <a href="#">Create New Account</a>
        </nav>
        <div>
            Continue with Google
        </div>
    </header>
   )

 }

export default Header