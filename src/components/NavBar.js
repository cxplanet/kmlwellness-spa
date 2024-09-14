import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { ReactComponent as Logo } from '../img/kmlhome.svg';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-inner">
                    <Logo className="logo" style={{ width: '160px', height: 'auto' }} />
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/coaching">Health Coaching</Link></li>
                        <li><Link to="/yoga">Yoga</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;