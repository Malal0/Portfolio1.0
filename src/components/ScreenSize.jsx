export default function ScreenSize({ width, height }) {
    return (
        <div className='Screen-Size'>
            <p>Width: <strong>{width}</strong></p>
            <p>Height: <strong>{height}</strong></p>
        </div>
    )
}