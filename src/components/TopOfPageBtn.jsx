import React from 'react'
import ToTopIcon from '../assets/images/toppagebtn.svg'
import ToTopIconHover from '../assets/images/toppagebtnhover.svg'


function TopOfPageBtn({ handleMouseEnter, handleMouseLeave, icon }) {
    return (
        <div className='BackToTop' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href='#'><img src={icon ? ToTopIconHover : ToTopIcon} className="logo" alt="Top of page" /></a>
        </div>
    )
}

export default TopOfPageBtn