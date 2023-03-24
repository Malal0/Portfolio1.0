// import React, { useEffect } from 'react'
import GithubIcon from '../assets/images/githubicon.svg'
import WeblinkIcon from '../assets/images/weblinkicon.svg'
import movie from '../assets/images/moviewatchlistbg.png'
import youtube from '../assets/images/youtubesearchbg.png'
import hike from '../assets/images/hikefinderbg.png'
import movieblurred from '../assets/images/moviewatchlistbgblur.png'
import youtubeblurred from '../assets/images/youtubesearchbgblur.png'
import hikeblurred from '../assets/images/hikefinderbgblur.png'
import './projects.css'

function Projects({ handleMouseEnter, handleMouseLeave }) {

    const projectsArr = [
        {
            name: 'Movie Watchlist',
            image: movie,
            githublink: 'https://github.com/Malal0/MovieWatchlist',
            url: 'https://mymovie-watchlist.netlify.app/index.html',
            background: movieblurred
        },
        {
            name: 'Youtube Channel Search',
            image: youtube,
            githublink: 'https://github.com/Malal0/Register-Count',
            url: 'https://youtube-channel-search.netlify.app/',
            background: youtubeblurred
        },
        {
            name: 'Hike Finder',
            image: hike,
            githublink: 'https://github.com/Malal0/HikeFinder',
            url: 'https://hikefinder.netlify.app/',
            background: hikeblurred
        }
    ]

    const projects = projectsArr.map(item => {
        return (
            <div className='project' key={item.image} style={{ backgroundImage: `url(${item.background})` }}>
                <div className='project-content-container'>
                    <img src={item.image} className="preview" alt={`${item.name} preview`} />
                    <h2>{item.name}</h2>
                    <div className='project-links'>
                        <a href={item.githublink} target='_blank' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img src={GithubIcon} className="logo-link" alt="Github link" />
                        </a>
                        <a href={item.url} target='_blank' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img src={WeblinkIcon} className="logo-link" alt="Website link" />
                        </a>
                    </div>
                    <p>Stack: HTML5, CSS, Sass, Javascript, ES6</p>
                </div >
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