import React from 'react'
import Htmllogo from '../assets/images/html5logo.png'
import Csslogo from '../assets/images/csslogo.png'
import Javascriptlogo from '../assets/images/javascriptlogo.png'
import Photoshoplogo from '../assets/images/photoshoplogo.png'
import Reactlogo from '../assets/images/reactlogo.png'
import Figmalogo from '../assets/images/figmalogo.png'
import Blenderlogo from '../assets/images/blenderlogo.png'
import './skills.css'

function Skills() {
    return (
        <div className='Skills-Section'>
            <h3>skills</h3>
            <div className='skills-container'>
                <div className='skill'>
                    <img src={Htmllogo} alt="Html logo" />
                    <p>html</p>
                </div>
                <div className='skill'>
                    <img src={Csslogo} alt="Css logo" />
                    <p>css</p>
                </div>
                <div className='skill'>
                    <img src={Javascriptlogo} alt="Javascript logo" />
                    <p>javascript</p>
                </div>
                <div className='skill'>
                    <img src={Photoshoplogo} alt="Photoshop logo" />
                    <p>photoshop</p>
                </div>
                <div className='skill'>
                    <img src={Reactlogo} alt="React logo" />
                    <p>react</p>
                </div>
                <div className='skill'>
                    <img src={Figmalogo} alt="Figma logo" />
                    <p>figma</p>
                </div>
            </div>
        </div>
    )
}

export default Skills