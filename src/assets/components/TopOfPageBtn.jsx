import React from 'react'
import ToTopIcon from '../images/toppagebtn.svg'
import ToTopIconHover from '../images/toppagebtnhover.svg'


function TopOfPageBtn({ handleMouseEnter, handleMouseLeave, icon }) {
    return (
        <div className='BackToTop' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href='#hero-section'><img src={icon ? ToTopIconHover : ToTopIcon} className="to-top-btn" alt="Top of page" /></a>
        </div>
    )
}

export default TopOfPageBtn