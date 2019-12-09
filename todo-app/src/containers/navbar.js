import React from 'react';
import './navbar.css';

function Navbar () {
    return (
        <nav>
          <div className="routes">  
            <a href='/' >Home</a>
            <a href='/more'>More</a>
          </div>  
        </nav>
    )
}

export default Navbar