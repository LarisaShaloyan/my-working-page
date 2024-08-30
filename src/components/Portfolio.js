import React from 'react';

const projects = [
    {
        id: 1,
        title: 'JavaScript Աշխատանք 1-Shop',
        codeLink: 'https://github.com/LarisaShaloyan/Practical-work',
        liveLink: 'https://github.com/LarisaShaloyan/Practical-work'
    },
    {
        id: 2,
        title: 'JavaScript Աշխատանք 2-To-Do-List',
        codeLink: 'https://github.com/user/project2',
        liveLink: 'https://user.github.io/project2'
    },
    {
        id: 3,
        title: 'JavaScript Աշխատանք 3-Animation',
        codeLink: 'https://github.com/user/project2',
        liveLink: 'https://user.github.io/project2'
    },
    {
        id: 5,
        title: 'JavaScript Աշխատանք 5-flag ',
        codeLink: 'https://github.com/user/project2',
        liveLink: 'https://user.github.io/project2'
    },
    {
        id: 6,
        title: 'JavaScript Աշխատանք 6-alarm',
        codeLink: 'https://github.com/user/project2',
        liveLink: 'https://user.github.io/project2'
    },

];

function Portfolio() {
    return (
        <div className="portfolio">
            <h2> Work in Javascript</h2>
            {projects.map(project => (
                <div key={project.id} className="project">
                    <h3>{project.title}</h3>
                    <div className="container">
                        <div className="box">
                    <button onClick={() => window.open(project.codeLink, '_blank')}>Տեսնել Կոդը</button>
                    <button onClick={() => window.open(project.liveLink, '_blank')}>Տեսնել Կայքը</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Portfolio;
