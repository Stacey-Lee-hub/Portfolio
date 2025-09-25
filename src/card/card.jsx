import './card.css'
import bg from '../assets/skill icons/blue on top.svg'

function SCard({icon}) {
    return (
        <>
            <div className="card-cont">
                <img src={bg} className='bg' alt="" />
                <div className="scard">
                    <div className="circle">
                        <img src={icon} style={{width: '6rem'}} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SCard;