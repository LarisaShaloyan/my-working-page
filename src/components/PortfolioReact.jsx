import React from 'react';
import PortfolioCategory from "./PortfolioCategory";


const reactWorks = [
    {
        title: "Աշխատանք 1-Covid 19",
        codeUrl: "https://github.com/user/project1",
        liveUrl: "https://user.github.io/project1"
    },
    {
        title: "Աշխատանք 2-Shop",
        codeUrl: "https://github.com/user/project2",
        liveUrl: "https://user.github.io/project2"
    },
    {
        title: "Աշխատանք 3-Product",
        codeUrl: "https://github.com/user/project2",
        liveUrl: "https://user.github.io/project2"
    },
    {
        title: "Աշխատանք 4-Timer",
        codeUrl: "https://github.com/user/project2",
        liveUrl: "https://user.github.io/project2"
    },
    {
        title: "Աշխատանք 5-To-Do-List",
        codeUrl: "https://github.com/user/project2",
        liveUrl: "https://user.github.io/project2"
    },
    {
        title: "Աշխատանք 6-CoffeeBar",
        codeUrl: "https://github.com/user/project2",
        liveUrl: "https://user.github.io/project2"
    },

];

function PortfolioReact(props) {
    return (
        <div className="portfolio">
            <h2>Work in React js</h2>

            {reactWorks.map((project, index) => (
                <div key={index} className="project">
                    <PortfolioCategory category="React Աշխատանքներ"/>

                    <h3>{project.title}</h3>
                    <div className="containerReact">
                        <div className="box">
                    <button onClick={() => window.open(project.codeUrl, "_blank")}>Տեսնել Կոդը</button>
                    <button onClick={() => window.open(project.liveUrl, "_blank")}>Տեսնել Կայքը</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PortfolioReact;