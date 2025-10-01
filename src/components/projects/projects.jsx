import './projects.css'
import { HashLink } from "react-router-hash-link";
import FadeInSection from '../../animation/fadeInSection.jsx';

function Projects() {
    const projects = [
            {
                id:1,
                name: 'ChauffeurLux Ecommerce Project',
                type: 'FullStack',
                summary: 'Built a digital-first eCommerce site for “ChaffeurLux” with seamless booking, secure payments, and a tailored vehicle catalogue for luxury tourism, corporate and special events market.',
                tech: ['React.js', 'JS', 'Node.js', 'HTML', 'MySQL', 'CSS'],
                github: 'https://github.com/Stacey-Lee-hub/EcomCarRental'
            },
            {
                id:2,
                name: 'HR Management System',
                type: 'FullStack',
                summary: 'Designed and implemented a full-stack HR system to manage employee salaries, reviews, and departmental data in a structured and efficient workflow.',
                tech: ['Vue.js', 'JS', 'Node.js', 'HTML', 'MySQL', 'CSS'],
                github: 'https://github.com/Stacey-Lee-hub/Hr_management_project'
            },
            {
                id:3,
                name: 'Portfolio',
                type: 'Frontend',
                summary: 'A personal portfolio website featuring a 3D-inspired hero section, an about page, a showcase of tools and technologies I use, and a curated selection of my projects.',
                tech: ['React.js', 'JS', 'HTML', 'CSS'],
                github: 'https://github.com/Stacey-Lee-hub/Portfolio'
            }
        ]

    return(
        <>
        <FadeInSection className="proj-cont" id="projects">
            <h2>Projects</h2>
            <br /><br />
            <div className="proj-grid">
                {projects.map((proj, index) => (
                    <div className="proj-card" key={index}>
                        <div className="proj-inner">
                            <div className="proj-front">
                                <h3 className='name'>{proj.name}</h3>
                                <div className="type-cont">
                                    <div className="type">{proj.type}</div>
                                </div>
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
        </FadeInSection>
        </>
    )
}

export default Projects