import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="nav main-menu">
            <ul className="navigation">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "activeBorder" : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/products" className={({ isActive }) => isActive ? "activeBorder" : ""}>Products</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "activeBorder" : ""}>About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "activeBorder" : ""}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
