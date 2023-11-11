import { useState } from 'react'

export default function Project({ url, image, name, gradient, handleMouseEnter, handleMouseLeave }) {
    const [isActive, setIsActive] = useState(false);
    const currentClass = isActive ? 'active' : '';
    // const boxContentHtml = ;

    function handleClick() {
        setIsActive(prevValue => !prevValue);
    }

    return (
        <div
            // className=""
            style={{ backgroundImage: `url(${image})` }}
            className={`project-box ${currentClass}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <div className="box-color" style={{ backgroundImage: gradient }}>
                {
                    isActive ?
                        <div className="box-content">
                            <a href={url} target="_blank">
                                <p className="title">{name}</p>
                            </a>
                        </div>
                        :
                        <div className="box-content">
                            <p className="title">{name}</p>
                        </div>
                }
            </div>
        </div>
    )
}