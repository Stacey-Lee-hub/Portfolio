import './footer.css'

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
                    <li>Home</li>
                    <li>About</li>
                    <li>Tool + Technologies</li>
                    <li>Projects</li>
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