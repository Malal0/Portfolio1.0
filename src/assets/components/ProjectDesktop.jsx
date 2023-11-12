import { useState } from 'react'

export default function ProjectDesktop({ url, image, name, gradient, handleMouseEnter, handleMouseLeave }) {
    function handleClick() {
        setIsActive(prevValue => !prevValue);
    }

    return (
        <a href={url} target="_blank">
            <div
                style={{ backgroundImage: `url(${image})` }}
                className="project-box"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
                <div className="box-color" style={{ backgroundImage: gradient }}>
                    <div className="box-content">
                        <p className="title">{name}<i class="jm-icon fa-solid fa-arrow-up-right-from-square"></i></p>
                    </div>
                </div>
            </div>
        </a >
    )
}