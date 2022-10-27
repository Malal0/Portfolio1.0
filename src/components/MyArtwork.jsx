import React from 'react'
import Logo from '../assets/images/JEM-Logo.svg'
import ProPic from '../assets/images/ProfilePic.png'
import GithubIcon from '../assets/images/githubicon.svg'
import WeblinkIcon from '../assets/images/weblinkicon.svg'
import './myartwork.css'

function MyArtwork() {
    return (
        <div className='MyArtwork-Section'>
            <h3>my artwork</h3>
            <div className='art-ex-container'>
                <div className='art-example first'>
                    <h4>2d art</h4>
                </div>
                <div className='art-example second'>
                    <h4>figma designs</h4>
                </div>
                <div className='art-example third'>
                    <h4>3d art</h4>
                </div>
            </div>
        </div>
    )
}

export default MyArtwork