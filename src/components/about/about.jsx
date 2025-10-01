import './about.css'
import { HashLink } from "react-router-hash-link";
import FadeInSection from '../../animation/fadeInSection.jsx';
import pic1 from '../../assets/profile pic/pic_1.png'
import pic2 from '../../assets/profile pic/pic_2.png'
import pic3 from '../../assets/profile pic/pic_3.png'
import star1 from '../../assets/stars/star1.svg'
import star2 from '../../assets/stars/star2.svg'
import star3 from '../../assets/stars/star3.svg'
import myCV from '../../assets/docs/CV.pdf'

function About(){
    return (
        <>
            <div className="container" id="about">
                <div className="left">
                    <img className='star1' src={star1} alt="" />
                    <img className='star2' src={star2} alt="" />
                    <img className='smallstar1' src={star3} alt="" />
                    <img className='smallstar2' src={star3} alt="" />
                    <img className='smallstar3' src={star3} alt="" />
                    <div className="slider">
                        <img src={pic1} alt="pic_1" />
                        <img src={pic2} alt="pic_2" />
                        <img src={pic3} alt="pic_3" />
                    </div>
                </div>
                <FadeInSection className="right">
                    <h2>About Me</h2>
                    {/* <p>I'm a young and driven software developer, with a passion for building practical, user-friendly web solutions. I see myself as a fullstack developer, having worked with Javascript, React, Vue, Node.js and SQL.</p> */}
                    <p>I’m Stacey-Lee Pietersen, a driven software developer and graduate of the LCA Youth Coding Bootcamp in Cape Town. With a background in BSc Geoinformatics and an ICDL certification, I discovered my passion for IT and developed a structured, analytical approach to solving problems. I enjoy building solutions that are practical, user-friendly, and meaningful. <br /><br />I have hands-on experience with JavaScript, CSS, React, Node.js, and SQL. I thrive in collaborative environments, embrace challenges with persistence, and look forward to growing my skills while contributing to innovative teams.</p>
                    <br />
                    <button><a href={myCV} target="_blank" rel="noopener noreferrer" >CV</a></button>
                </FadeInSection>
            </div>
        </>
    )
}

export default About