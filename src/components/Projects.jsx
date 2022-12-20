import React from 'react'
import GithubIcon from '../assets/images/githubicon.svg'
import WeblinkIcon from '../assets/images/weblinkicon.svg'
import LoteriaPreview from '../assets/images/loteriaprev.png'
import FauxgymPreview from '../assets/images/FauxGymDesktopView.png'
import PasswordgeneratorPreview from '../assets/images/passwordgeneratorprev.png'
import './projects.css'

function Projects({ handleMouseEnter, handleMouseLeave }) {

    const projectsArr = [
        {
            name: 'loteria online',
            image: LoteriaPreview,
            githublink: 'https://github.com/Malal0/Loteria',
            url: 'https://loteria-card-generator.netlify.app/'
        },
        {
            name: 'faux gym',
            image: FauxgymPreview,
            githublink: 'https://github.com/Malal0/Faux-Gym',
            url: 'https://faux-gym.netlify.app/'
        },
        {
            name: 'the best password generator',
            image: PasswordgeneratorPreview,
            githublink: 'https://github.com/Malal0/PasswordGenerator',
            url: 'https://bestpasswordgenerator.netlify.app/'
        }

    ]

    const projects = projectsArr.map(item => {
        return (
            <div className='project'>
                <div className='project-cta'>
                    <h2>{item.name}</h2>
                    <div className='cta-links'>
                        <a href={item.githublink} target='_blank' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img src={GithubIcon} className="logo-link" alt="Github link" /></a>
                        <a href={item.url} target='_blank' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img src={WeblinkIcon} className="logo-link" alt="Website link" /></a>
                    </div>
                </div>
                <img src={item.image} className="preview" alt={`${item.name} preview`} />
            </div>
        )
    })

    return (
        <div className='Projects-Section'>
            <h3>projects</h3>
            {projects}
        </div>
    )
}

export default Projects