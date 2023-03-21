import React, { useEffect } from 'react'
// import GithubIcon from '../assets/images/githubicon.svg'
// import WeblinkIcon from '../assets/images/weblinkicon.svg'
// import moviewatchlistbg from '../assets/images/moviewatchlistbg.png'
// import youtubesearchbg from '../assets/images/youtubesearchbg.png'
// import hikefinderbg from '../assets/images/hikefinderbg.png'
import './projects.css'

const images = document.querySelectorAll('.preview');

function Projects({ handleMouseEnter, handleMouseLeave }) {

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
                <p>hi</p>
            </div>
        </div>
    )
}

export default Projects

/*

    const projectsArr = [
        {
            name: 'Movie Watchlist',
            image: moviewatchlistbg,
            githublink: 'https://github.com/Malal0/MovieWatchlist',
            url: 'https://mymovie-watchlist.netlify.app/index.html'
        },
        {
            name: 'Youtube Channel Search',
            image: youtubesearchbg,
            githublink: 'https://github.com/Malal0/YoutubeChannelSearch',
            url: 'https://youtube-channel-search.netlify.app/'
        },
        {
            name: 'hikefinderbg',
            image: hikefinderbg,
            githublink: 'https://github.com/Malal0/HikeFinder',
            url: 'https://hikefinder.netlify.app/'
        }
    ]

        const projects = projectsArr.map(item => {
        return (
            <div className='project' key={projectsArr.indexOf(item)} style={{ backgroundImage: `url(${item.image})` }}>
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
*/