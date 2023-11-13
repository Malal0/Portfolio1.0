// import React, { useEffect } from 'react'
import GithubIcon from '../../assets/images/githubicon.svg'
import WeblinkIcon from '../../assets/images/weblinkicon.svg'
import cd from '../../assets/images/cd.png'
import moh from '../../assets/images/moh.png'
import tl from '../../assets/images/tl.png'
import pg from '../../assets/images/pg.png'
import qz from '../../assets/images/qz.png'
import ic from '../../assets/images/ic.png'
import ProjectMobile from '../components/ProjectMobile'
import ProjectDesktop from '../components/ProjectDesktop'
import '../../assets/styles/css/projects.css'

function Projects({ handleMouseEnter, handleMouseLeave, handleWidth }) {

    const prevWorkArr = [
        {
            name: 'chili dippers',
            image: cd,
            url: 'https://chilidippers.com/',
            gradient: 'linear-gradient(151deg, rgba(244, 184, 111, 0.90) 7.69%, rgba(27, 113, 130, 0.90) 91.72%)'
        },
        {
            name: 'the maze of hochatown',
            image: moh,
            url: 'https://themazeofhochatown.com/',
            gradient: ' linear-gradient(329deg, rgba(229, 219, 182, 0.90) 6%, rgba(164, 74, 44, 0.90) 91%)'
        },
        {
            name: 'Theatre Longview',
            image: tl,
            url: 'https://theatrelongview.com/',
            gradient: 'linear-gradient(155deg, rgba(254, 241, 0, 0.90) 8.19%, rgba(253, 20, 210, 0.90) 91.18%)'
        },
    ]

    const prevProjectsArr = [
        {
            name: 'Best Password Generator',
            image: pg,
            url: 'https://bestpasswordgenerator.netlify.app/',
            gradient: 'linear-gradient(151deg, hsla(159.88,83.92%,39.02%, .9) 7.69%, hsla(147.69,59.63%,78.63%, .9) 91.72%)'
        },
        {
            name: 'Invoice Creator',
            image: ic,
            url: 'https://invoicecreatorsoloproject.netlify.app/',
            gradient: ' linear-gradient(329deg, hsla(221.21,83.49%,57.25%, .9) 6%, hsl(253.85,6.1%,58.24%, .9) 91%)'
        },
        {
            name: 'Quizlet',
            image: qz,
            url: 'https://quizlet-jm.netlify.app/',
            gradient: 'linear-gradient(155deg, rgba(145, 54, 4, .9) 8.19%, rgba(79, 103, 55, .9) 91.18%)'
        },
    ]

    const prevWork = prevWorkArr.map(item => {
        return handleWidth < 1020 ?
            <ProjectMobile {...item} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} /> :
            <ProjectDesktop {...item} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
    })

    const prevProjects = prevProjectsArr.map(item => {
        return handleWidth < 1020 ?
            <ProjectMobile {...item} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} /> :
            <ProjectDesktop {...item} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
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
            <div className='jm-container'>
                <div className='text-content'>
                    <h3>Previous work and Projects</h3>
                    <p>These websites were made with HTML, CSS, Javascript, PHP and Wordpress</p>
                </div>
                <div class="Projects-container">
                    {prevWork}
                    {prevProjects}
                </div>
            </div>
        </div>
    )
}

export default Projects