import './skills.css'
import { HashLink } from "react-router-hash-link";
import Card from '../../card/card.jsx'
import js from '../../assets/skill icons/javascript.png'
import html from '../../assets/skill icons/html.png'
import css from '../../assets/skill icons/css.png'
import bootstrap from '../../assets/skill icons/bootstrap.png'
import react from '../../assets/skill icons/react.png'
import vue from '../../assets/skill icons/vuejs.png'
import node from '../../assets/skill icons/nodejs.png'
import express from '../../assets/skill icons/expressjs.png'
import php from '../../assets/skill icons/php.webp'
import python from '../../assets/skill icons/python.png'
import wordpress from '../../assets/skill icons/wordpress.png'
import mysql from '../../assets/skill icons/mysql.png'
import oraclesql from '../../assets/skill icons/oraclesql.png'
import oracleapex from '../../assets/skill icons/oracleapex.jpg'
import figma from '../../assets/skill icons/figma.png'
import git from '../../assets/skill icons/git.png'
import { useEffect, useRef } from 'react';

function Skills() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const cards = Array.from(container.querySelectorAll('.card'));

        function handleMouseMove(e) {
            const rect = container.getBoundingClientRect();
            const mouseX =e.clientX - rect.left;
            const mouseY =e.clientY - rect.top;

            cards.forEach((card) => {
                const cardRect = card.getBoundingClientRect();
                const cardX = cardRect.left + cardRect.width / 2 - rect.left
                const cardY = cardRect.top + cardRect.height / 2 - rect.top

                const dx = cardX - mouseX;
                const dy = cardY - mouseY;

                // Repel distance
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 0.0001) dist = 0.0001;
                const maxDist = 130;

                if(dist < maxDist) {
                    const force = (maxDist - dist) / maxDist;
                    const offset = force * 50;
                    const offsetX = (dx / dist) * offset;
                    const offsetY = (dy / dist) * offset;

                    card.style.transform = `translate(${offsetX}px, ${offsetY}px)`
                } else {
                    card.style.transform = `translate(0, 0)`
                }
            })
        }

        function handleMouseLeave() {
            cards.forEach((card) => (card.style.transform = `translate(0, 0)`))
        }

        container.addEventListener("mousemove", handleMouseMove)
        container.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            container.removeEventListener("mousemove", handleMouseMove)
            container.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])

    return (
        <>
            <div className="skill-cont" id="skills">
                <h2>Tools + Technologies</h2>
                <div className="cards" ref={containerRef}>
                    <div className="card"><Card icon={js}/></div>
                    <div className="card"><Card icon={html}/></div>
                    <div className="card"><Card icon={css}/></div>
                    <div className="card"><Card icon={bootstrap}/></div>
                    <div className="card"><Card icon={react}/></div>
                    <div className="card"><Card icon={vue}/></div>
                    <div className="card"><Card icon={node}/></div>
                    <div className="card"><Card icon={express}/></div>
                    <div className="card"><Card icon={php}/></div>
                    <div className="card"><Card icon={python}/></div>
                    <div className="card"><Card icon={wordpress}/></div>
                    <div className="card"><Card icon={mysql}/></div>
                    <div className="card"><Card icon={oraclesql}/></div>
                    <div className="card"><Card icon={oracleapex}/></div>
                    <div className="card"><Card icon={figma}/></div>
                    <div className="card"><Card icon={git}/></div>
                </div>
            </div>
        </>
    )
}

export default Skills