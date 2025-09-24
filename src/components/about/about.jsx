import './about.css'
import pic1 from '../../assets/profile pic/pic_1.png'
import pic2 from '../../assets/profile pic/pic_2.png'
import pic3 from '../../assets/profile pic/pic_3.png'
import star1 from '../../assets/stars/star1.svg'
import star2 from '../../assets/stars/star2.svg'
import star3 from '../../assets/stars/star3.svg'

function About(){
    return (
        <>
            <div className="container">
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
                <div className="right">
                    <h2>About Me</h2>
                    <p>blurb........................................................................................</p>
                    <br />
                    <button><a href="">CV</a></button>
                </div>
            </div>
        </>
    )
}

export default About