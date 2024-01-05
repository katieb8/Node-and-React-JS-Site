import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return(
    <nav className='navbar'>
        <button className='navbar-toggler' type='button'>
        <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navMainMenu">
            
            <div className='navbar-links'>
                <Link to='/' className="nav-item">Homepage</Link>
                <Link to='https://google.com' className="nav-item">Search</Link>
            </div>
        </div>
    </nav>
    );
}

export default Nav;