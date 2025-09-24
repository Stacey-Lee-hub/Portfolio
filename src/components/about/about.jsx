import './about.css'
import pic1 from '../../assets/profile pic/pic_1.png'

function About(){
    return (
        <>
            <div className="container">
                <div className="left">
                    <div className="slider">
                        <img src={pic1} alt="" />
                    </div>
                </div>
                <div className="right">
                    <h2>let me see this please</h2>
                </div>
            </div>
        </>
    )
}

export default About