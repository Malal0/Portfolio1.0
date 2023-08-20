// import React, { useEffect } from 'react'
import GithubIcon from '../assets/images/githubicon.svg'
import WeblinkIcon from '../assets/images/weblinkicon.svg'
import cd from '../assets/images/cd.png'
import cdblurred from '../assets/images/cd-blur.png'
import moh from '../assets/images/moh.png'
import mohblurred from '../assets/images/moh-blur.png'
import tl from '../assets/images/tl.png'
import tlblurred from '../assets/images/tl-blur.png'
import './projects.css'

function Projects({ handleMouseEnter, handleMouseLeave }) {

    const projectsArr = [
        {
            name: 'name',
            image: image_name,
            url: 'url_line',
            background: image_blurred
        },
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