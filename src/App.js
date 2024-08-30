import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PersonalInfo from './components/PersonalInfo';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';
import PortfolioReact from "./components/PortfolioReact";
import AboutMe from "./components/aboutMe";

function App() {

    const [showPortfolio, setShowPortfolio] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    const handleShowPortfolio = () => {
        setShowPortfolio(true);
        setShowContact(false);
        setShowAbout(false);
    };

    const handleShowContact = () => {
        setShowContact(true);
        setShowPortfolio(false);
        setShowAbout(false)
    };
    const handleShowAbout = () => {
        setShowAbout(true);
        setShowPortfolio(false);
        setShowContact(false);
    };

    return (
        <div className="App">


            <Navbar onShowPortfolio={handleShowPortfolio} onShowContact={handleShowContact}
                    onShowAbout={handleShowAbout}/>
            <div className="container">
                <PersonalInfo/>
                {showPortfolio && <Portfolio/>}
                {showPortfolio && <PortfolioReact/>}
                {showContact && <Contact/>}
                {showAbout && <AboutMe/>}
            </div>
        </div>
    );
}

export default App;
