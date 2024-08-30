import React from 'react';

const Navbar = ({ onShowPortfolio, onShowContact,onShowAbout }) => {
    return (
        <nav className="navbar">
            <h1>Իմ աշխատանքները</h1>
            <ul>
                <li><a href="#about" onClick={onShowAbout}>Մասին</a></li>
                <li><a href="#portfolio" onClick={onShowPortfolio}>Աշխատանքներ</a></li>
                <li><a href="#contact" onClick={onShowContact}>Կապ</a></li>

            </ul>
        </nav>
    );
}

export default Navbar;
