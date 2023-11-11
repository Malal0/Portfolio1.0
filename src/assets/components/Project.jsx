export default function Project({ url, image, name, gradient, handleMouseEnter, handleMouseLeave }) {
    return (
        <a href={url} target="_blank" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="project-box" style={{ backgroundImage: `url(${image})` }}>
                <div className="box-color" style={{ backgroundImage: gradient }}>
                    <div className="box-content">
                        <p className="title">{name}</p>
                        <p className="tags">stack used for this project</p>
                    </div>
                </div>
            </div>
        </a>
    )
}