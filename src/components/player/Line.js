import './library.css'

const LineTitle = () => {
    return (
        <div className="librarylinetitle">
            <div className='line-number'>#</div>
            <div className='song-name'>SONG</div>
            <div className='time'>TIME</div>
            <div className='artist'>ARTIST</div>
            <div className='album'>ALBUM</div>
        </div>
    )
}

const Line = () => {
    return (
        <div className="libraryline">
            <div className='line-number'>1</div>
            <div className='song-name'>All the Rage</div>
            <div className='time'>3:23</div>
            <div className='artist'>Funeral for a Friend</div>
            <div className='album'>Hours</div>
        </div>
    )
}

export { Line, LineTitle};