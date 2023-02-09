import React, { useEffect } from 'react'
import GithubIcon from '../assets/images/githubicon.svg'
import WeblinkIcon from '../assets/images/weblinkicon.svg'
import InvoiceCreatorPreview from '../assets/images/invoicecreator.png'
import PasswordgeneratorPreview from '../assets/images/passwordgenerator.png'
import RegisterCountPreview from '../assets/images/registercount.png'
import './projects.css'

function Projects({ handleMouseEnter, handleMouseLeave }) {

    const projectsArr = [
        {
            name: 'invoice creator',
            image: InvoiceCreatorPreview,
            githublink: 'https://github.com/Malal0/Invoice-Creator',
            url: 'https://invoicecreatorsoloproject.netlify.app/'
        },
        {
            name: 'the best password generator',
            image: PasswordgeneratorPreview,
            githublink: 'https://github.com/Malal0/PasswordGenerator',
            url: 'https://bestpasswordgenerator.netlify.app/'
        },
        {
            name: 'Register Count',
            image: RegisterCountPreview,
            githublink: 'https://github.com/Malal0/Register-Count',
            url: 'https://registercount.netlify.app/'
        }
    ]

    const projects = projectsArr.map(item => {
        return (
            <div className='project' key={projectsArr.indexOf(item)}>
                <div className='project-content-container'>
                    <img src={item.image} className="preview" alt={`${item.name} preview`} />
                    <h2>{item.name}</h2>
                    <div className='project-links'>
                        <a href={item.githublink} target='_blank' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img src={GithubIcon} className="logo-link" alt="Github link" /></a>
                        <a href={item.url} target='_blank' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img src={WeblinkIcon} className="logo-link" alt="Website link" /></a>
                    </div>
                    <p>Stack: HTML5, CSS, Sass, Javascript, ES6</p>
                </div >
            </div>
        )
    })

    const images = document.querySelectorAll('.preview');

    function handleImageEnter(e) {
        e.target.previousSibling.firstChild.classList.add('bordered')
        e.target.previousSibling.lastChild.classList.add('bordered')
    }

    function handleImageLeave(e) {
        e.target.previousSibling.firstChild.classList.remove('bordered')
        e.target.previousSibling.lastChild.classList.remove('bordered')
    }

    useEffect(() => {
        images.forEach((image) => image.addEventListener('mouseenter', handleImageEnter));
        images.forEach((image) => image.addEventListener('mouseleave', handleImageLeave));
    }, []);

    return (
        <div className='Projects-Section'>
            <h3>projects</h3>
            <div class="Projects-container">
                {projects}
            </div>
        </div>
    )
}

export default Projects