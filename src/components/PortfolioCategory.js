import React, { useState } from 'react';

const PortfolioCategory = ({ category, works }) => {
    const [showWorks, setShowWorks] = useState(false);

    const toggleWorks = () => {
        setShowWorks(!showWorks);
    };

    return (
        <div className="portfolio-category">
            <h3 onClick={toggleWorks} className="category-title">
                {category}
            </h3>
            {showWorks && (
                <div className="works-list">
                    {works.map((work, index) => (
                        <div key={index} className="work-item">
                            <h4>{work.title}</h4>
                            <p>{work.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default PortfolioCategory;
