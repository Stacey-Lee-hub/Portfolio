import './footer.css'
import { HashLink } from "react-router-hash-link";

function Footer() {
    return (
        <>
        {/* add copyright somewhere */}
        <div className="footer">
            <div className="foot-sum">
                <h4>Stacey-Lee Pietersen</h4>
                <p>blurb..............</p>
            </div>
            <div className="navi">
                <h4>Navigation</h4>

                <ul className='navi-grid'>
                    <li><HashLink smooth to="/#home">Home</HashLink></li>
                    <li><HashLink smooth to="/#about">About</HashLink></li>
                    <li><HashLink smooth to="/#skills">Tools + Technologies</HashLink></li>
                    <li><HashLink smooth to="/#projects">Projects</HashLink></li>
                </ul>
            </div>
            <div className="links">
                <h4>Find Me Online</h4>
                <div className="icons">
                    {/* make icons data (img + link); LinkedIn, Github, Insta */}
                    <a href=""></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer