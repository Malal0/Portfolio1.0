// import React from 'react'
import Logo from '../images/JEM-Logo.svg'
import ProPic from '../images/ProfilePic.png'
import GithubIcon from '../images/githubicon.svg'
import WeblinkIcon from '../images/weblinkicon.svg'
import '../styles/css/myartwork.css'

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