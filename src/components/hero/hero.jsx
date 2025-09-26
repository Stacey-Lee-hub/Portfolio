import './hero.css'
import { HashLink } from "react-router-hash-link";
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
            <div className="hero" id="home">
                <Nav/>
                <br /> <br />
                <div className="content">
                    <h1>My Portfolio</h1>
                    <p>Software Developer</p>
                    {/* <p>akhsjfh</p> */}
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
                                <div className="id-icons">
                                    {/* LinkedIn*/}
                                    <a href="https://www.linkedin.com/in/stacey-lee-pietersen-a4a248345/" target="_blank" ><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="var(--blue)" class="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg></a>
                                    {/* Email */}
                                    <a href="mailto:staceypietersen2@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="var(--blue)" class="bi bi-envelope-fill" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/></svg></a>
                                </div>
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