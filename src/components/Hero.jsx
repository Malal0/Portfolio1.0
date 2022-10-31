import React from 'react'
import { motion } from 'framer-motion'
import Logo from '../assets/images/JEM-Logo.svg'
import ProPic from '../assets/images/ProfilePic.png'
import MenuBtn from '../assets/images/Menu-btn-alt.svg'
import Arrow from '../assets/images/Arrow.svg'
import './hero.css'

function Hero({ handleMouseEnter, handleMouseLeave, width }) {
    const link = 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=300';
    // const variants = {
    //     default: {
    //         height: '96px'
    //     },
    //     scrolled: {
    //         height: '48px',
    //         backgroundColor: 'black'
    //     }
    // }

    // {width > 1020 ?
    //     <motion.div
    //         className='navbar'
    //     // variants={variants}
    //     // animate={ }
    //     >
    //         <a className='logo' href='https://www.thisworldthesedays.com/easter-egg4.html' target='_blank' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img src={Logo} className="logo" alt="Logo" /></a>
    //         <nav>
    //             <ul>
    //                 <a href='#' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><li>home</li></a>
    //                 <a href='#' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><li>projects</li></a>
    //                 <a href='#' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><li>about</li></a>
    //                 {/* <a href='#' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><li>figma designs</li></a> */}
    //                 <a href='#' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><li>contact</li></a>
    //             </ul>
    //         </nav>
    //     </motion.div > :
    //     <motion.div
    //         className='navbar'
    //     // variants={variants}
    //     // animate={ }
    //     >
    //         <a className='logo' href='https://www.thisworldthesedays.com/easter-egg4.html' target='_blank' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img src={Logo} className="logo" alt="Logo" /></a>
    //         <button className='menu-btn'>
    //             <img className='menu-svg' src={MenuBtn} alt="menu button" />
    //         </button>
    //         {/* <nav>
    //         <ul>
    //             <a href='#' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><li>home</li></a>
    //             <a href='#' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><li>projects</li></a>
    //             <a href='#' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><li>about</li></a>
    //             {/* <a href='#' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><li>figma designs</li></a> */}
    //         {/*<a href='#' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><li>contact</li></a>
    //         </ul>
    //     </nav> */}
    //     </motion.div>
    // }

    return (
        <div className="Hero-Section" >
            <div className='bg-Image'>
                <div className='hero-main' >
                    <img src={ProPic} alt="Picture of Dev" />
                    <div className='hero-txt'>
                        <h1>Joshua E. Martinez</h1>
                        <p>Web Developer</p>
                    </div>
                </div >
            </div >
            <div className='scrolldown'>
                <p>(scroll down)</p>
                <img src={Arrow}></img>
            </div>
        </div >
    )
}

export default Hero