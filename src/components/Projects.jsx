// import React, { useEffect } from 'react'
import GithubIcon from '../assets/images/githubicon.svg'
import WeblinkIcon from '../assets/images/weblinkicon.svg'
import winery from '../assets/images/winerybg.png'
import barbershop from '../assets/images/barbershopbg.png'
import donutempire from '../assets/images/donutempirebg.png'
import wineryblurred from '../assets/images/winerybgblur.png'
import barbershopblurred from '../assets/images/barbershopbgblur.png'
import donutempireblurred from '../assets/images/donutempirebgblur.png'
import './projects.css'

function Projects({ handleMouseEnter, handleMouseLeave }) {

    const projectsArr = [
        {
            name: 'Martinez Winery',
            image: winery,
            url: 'https://winery54321.netlify.app/',
            background: wineryblurred
        },
        {
            name: 'Clean Cuts',
            image: barbershop,
            url: 'https://barbershop54321.netlify.app/',
            background: barbershopblurred
        },
        {
            name: 'Donut Empire',
            image: donutempire,
            url: 'https://donutempire.netlify.app/',
            background: donutempireblurred
        }
    ]

    const projects = projectsArr.map(item => {
        return (
            <div className='project' key={item.image} style={{ backgroundImage: `url(${item.background})` }}>
                <a href={item.url} target='_blank' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className='project-content-container'>
                        <img src={item.image} className="preview" alt={`${item.name} preview`} />
                        <h2>{item.name}</h2>
                        <p>click me</p>
                    </div >
                </a>
            </div>
        )
    })

    // const images = document.querySelectorAll('.preview');

    // function handleImageEnter(e) {
    //     e.target.previousSibling.firstChild.classList.add('bordered')
    //     e.target.previousSibling.lastChild.classList.add('bordered')
    // }

    // function handleImageLeave(e) {
    //     e.target.previousSibling.firstChild.classList.remove('bordered')
    //     e.target.previousSibling.lastChild.classList.remove('bordered')
    // }

    // useEffect(() => {
    //     images.forEach((image) => image.addEventListener('mouseenter', handleImageEnter));
    //     images.forEach((image) => image.addEventListener('mouseleave', handleImageLeave));
    // }, []);

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