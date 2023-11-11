import React from 'react'
import Htmllogo from '../images/html5logo.png'
import Csslogo from '../images/csslogo.png'
import Javascriptlogo from '../images/javascriptlogo.png'
import Photoshoplogo from '../images/photoshoplogo.png'
import Reactlogo from '../images/reactlogo.png'
import Figmalogo from '../images/figmalogo.png'
import Phplogo from '../images/phplogo.png'
import Wordpresslogo from '../images/wordpresslogo.png'
import Blenderlogo from '../images/blenderlogo.png'
import '../styles/css/skills.css'

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
        {
            name: 'php',
            image: Phplogo
        },
        {
            name: 'wordpress',
            image: Wordpresslogo
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