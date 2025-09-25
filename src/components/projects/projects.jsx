import './projects.css'

function Projects() {
    const projects = [
            {
                id:1,
                name: 'ChauffeurLux Ecommerce Project',
                type: 'FullStack',
                summary: 'summary infor here',
                tech: ['React.js', 'JS', 'Node.js', 'HTML', 'MySQL', 'CSS'],
                github: 'https://github.com/Stacey-Lee-hub/EcomCarRental'
            },
            {
                id:2,
                name: 'HR Management System',
                type: 'FullStack',
                summary: 'summary infor here',
                tech: ['Vue.js', 'JS', 'Node.js', 'HTML', 'MySQL', 'CSS'],
                github: 'https://github.com/Stacey-Lee-hub/Hr_management_project'
            },
            {
                id:3,
                name: 'Portfolio',
                type: 'Frontend',
                summary: 'summary infor here',
                tech: ['React.js', 'JS', 'HTML', 'CSS'],
                github: 'https://github.com/Stacey-Lee-hub/Portfolio'
            }
        ]

    return(
        <>
        <div className="proj-cont">
            <h2>Projects</h2>
            <br /><br />
            <div className="proj-grid">
                {projects.map((proj, index) => (
                    <div className="proj-card" key={index}>
                        <div className="proj-inner">
                            <div className="proj-front">
                                <h3 className='name'>{proj.name}</h3>
                                <div className="type">{proj.type}</div>
                                <div className="summary">{proj.summary}</div>
                            </div>

                            <div className="proj-back">
                                <h3 className="tech">Technologies Used</h3>
                                <div className="tech-grid">
                                    {proj.tech.map((t, i) => (
                                        <p key={i}>{t}</p>
                                    ))}
                                </div>
                                <div className="github">
                                    <button><a href={proj.github} target="_blank" rel="noreferrer">github</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Projects