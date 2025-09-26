import './nav.css';
import { HashLink } from "react-router-hash-link";

function Nav() {
    return (
        <>
            <nav>
                <ul>
                    <li><HashLink smooth to="/#home">Home</HashLink></li>
                    <li><HashLink smooth to="/#about">About</HashLink></li>
                    <li><HashLink smooth to="/#skills">Tools + Technologies</HashLink></li>
                    <li><HashLink smooth to="/#projects">Projects</HashLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav