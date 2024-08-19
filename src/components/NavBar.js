import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom for client-side routing
import './NavBar.css';  // Import a CSS file for custom styles

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/coaching">Health Coaching</Link></li>
                {/* <li><Link to="/book-online">Book Online</Link></li> */}
                <li><Link to="/yoga">Yoga</Link></li>
                <li><Link to="/services">Services</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;