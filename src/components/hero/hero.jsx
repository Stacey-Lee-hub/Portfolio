import './hero.css'
import Nav from '../nav/nav.jsx'

function Hero() {
    return (
        <>
            <div className="hero">
                <Nav/>
                <br /> <br />
                <div className="content">
                    <h1>Stacey-Lee Pietersen</h1>
                    <p>Software Developer</p>
                </div>
                <div className="id">
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}

export default Hero