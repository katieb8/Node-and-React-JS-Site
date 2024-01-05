import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return(
    <nav className='navbar navbar-light bg-light '>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navMainMenu" className='navbar-collapse collapse'>
            <div className='navbar-links'>
                <Link to='/Home' className="nav-item nav-link active">Homepage</Link>
                <Link to='/Info' className="nav-item nav-link">Info</Link>
                <Link to='https://google.com' className="nav-item nav-link">Search</Link>
            </div>
        </div>
    </nav>
    );
}

export default Nav;