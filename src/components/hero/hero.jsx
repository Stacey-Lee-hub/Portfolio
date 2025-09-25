import './hero.css'
import Nav from '../nav/nav.jsx'
import { useEffect, useRef } from 'react';
import pic from '../../assets/pic_4.jpg';

function Hero() {
    const cardRef = useRef(null);
    // raf = requestAnimationFrame
    const rafRef = useRef(null);
    // latest rotation position
    const lastPosRef = useRef({rotateX: 0, rotateY: 0});

    useEffect(() => {
        const element = cardRef.current;
        if (!element) return;
        let scheduled = false;

        const onMouseMove = (e) => {
            let rect =element.getBoundingClientRect();

            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            let xCenter = rect.width / 2;
            let yCenter = rect.height / 2;

            let xOffset = (x - xCenter) / xCenter;
            let yOffset = (y - yCenter) / yCenter;

            let rotateX = yOffset * 30;
            let rotateY = xOffset * 30;

            lastPosRef.current.rotateX = rotateX;
            lastPosRef.current.rotateY = rotateY;

            // wait until browser is ready to create the next frame
            if (!scheduled) {
                scheduled = true;
                rafRef.current = requestAnimationFrame(() => {
                    element.style.transform = `rotateX(${lastPosRef.current.rotateX}deg) rotateY(${lastPosRef.current.rotateY}deg)`;
                    scheduled = false
                });
            }
        }

        const onMouseLeave = () => {
            // reset transform 
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            element.style.transition = "transform 2s ease";
            element.style.transform = "rotateX(0deg) rotateY(0deg)";

            setTimeout(() => {
                element.style.transition = "";
            }, 2000);
        }

        element.addEventListener("mousemove", onMouseMove);
        element.addEventListener("mouseleave", onMouseLeave);
        
        return () => {
            element.removeEventListener("mousemove", onMouseMove);
            element.removeEventListener("mouseleave", onMouseLeave);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);


    return (
        <>
            <div className="hero">
                <Nav/>
                <br /> <br />
                <div className="content">
                    <h1>My Portfolio</h1>
                    <p>Software Developer</p>
                </div>
                <div className="id" ref={cardRef}>
                    <div className="left-col">
                        <img src={pic} alt="" />
                    </div>
                    <div className="right-col">
                        <p>Stacey-Lee Pietersen</p>
                        <div className="info-grid">
                            <div className="info-left">
                                <p className='head'>Profession</p>
                                <p className="text">Developer</p>
                                <br />
                                <p className='head'>Contact</p>
                                <p className="text"><a href="">LinkedIn</a> <a href="">Email</a></p>
                                {/* icon links */}
                            </div>
                            <div className="info-right">
                                <p className="head">Location</p>
                                <p className="text">Cape Town, SA</p>
                                {/* fake signature */}
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                </div>
            </div>
        </>
    )
}

export default Hero