// import React, { useEffect } from 'react'
import GithubIcon from '../../assets/images/githubicon.svg'
import WeblinkIcon from '../../assets/images/weblinkicon.svg'
import cd from '../../assets/images/cd.png'
import cdblurred from '../../assets/images/cd-blur.png'
import moh from '../../assets/images/moh.png'
import mohblurred from '../../assets/images/moh-blur.png'
import tl from '../../assets/images/tl.png'
import tlblurred from '../../assets/images/tl-blur.png'
import '../../assets/styles/css/projects.css'

function Projects({ handleMouseEnter, handleMouseLeave }) {

    const projectsArr = [
        {
            name: 'chili dippers',
            image: cd,
            url: 'https://chilidippers.com/',
            background: cdblurred
        },
        {
            name: 'the maze of hochatown',
            image: moh,
            url: 'https://themazeofhochatown.com/',
            background: mohblurred
        },
        {
            name: 'Theatre Longview',
            image: tl,
            url: 'https://theatrelongview.com/',
            background: tlblurred
        },
    ]

    const projects = projectsArr.map(item => {
        return (
            <>
                <a href={item.url} target="_blank" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className="work-box" style={{ backgroundImage: `${item.image}` }}>
                        <div className="box-color" style={{ backgroundColor: 'hsla(18, 100%, 57%, .9)' }}>
                            <div className="box-content">
                                <p className="title">{item.name}</p>
                                <p className="tags">stack used for this project</p>
                            </div>
                        </div>
                    </div>
                </a>
            </>
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