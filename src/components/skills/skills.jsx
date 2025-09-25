import './skills.css'
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

function Skills() {
    return (
        <>
            {/* cards disperse but on double click they come back together */}
            <div className="skill-cont">
                <h2>Tools & Technologies</h2>
                <div className="cards">
                    <Card icon={js}/>
                    <Card icon={html}/>
                    <Card icon={css}/>
                    <Card icon={bootstrap}/>
                    <Card icon={react}/>
                    <Card icon={vue}/>
                    <Card icon={node}/>
                    <Card icon={express}/>
                    <Card icon={php}/>
                    <Card icon={python}/>
                    <Card icon={wordpress}/>
                    <Card icon={mysql}/>
                    <Card icon={oraclesql}/>
                    <Card icon={oracleapex}/>
                    <Card icon={figma}/>
                    <Card icon={git}/>
                </div>
            </div>
        </>
    )
}

export default Skills