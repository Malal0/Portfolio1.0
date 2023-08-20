import React from 'react'
import Htmllogo from '../assets/images/html5logo.png'
import Csslogo from '../assets/images/csslogo.png'
import Javascriptlogo from '../assets/images/javascriptlogo.png'
import Photoshoplogo from '../assets/images/photoshoplogo.png'
import Reactlogo from '../assets/images/reactlogo.png'
import Figmalogo from '../assets/images/figmalogo.png'
import Phplogo from '../assets/images/phplogo.png'
import Wordpresslogo from '../assets/images/wordpresslogo.png'
import Blenderlogo from '../assets/images/blenderlogo.png'
import './skills.css'

function Skills() {

    const skillsArr = [
        {
            name: 'html',
            image: Htmllogo
        },
        {
            name: 'css',
            image: Csslogo
        },
        {
            name: 'javascript',
            image: Javascriptlogo
        },
        {
            name: 'photoshop',
            image: Photoshoplogo
        },
        {
            name: 'react',
            image: Reactlogo
        },
        {
            name: 'figma',
            image: Figmalogo
        },
    ];

    const skillsHtml = skillsArr.map(skill => {
        const { name, image } = skill;

        return (
            <div className='skill'>
                <img src={image} alt={`${name} logo`} />
                <p>{name}</p>
            </div>
        )
    });

    return (
        <div className='Skills-Section'>
            <h3>skills</h3>
            <div className='skills-container'>

                {skillsHtml}

            </div>
        </div>
    )
}

export default Skills