import './library.css'
import React, {useState, useEffect} from 'react'

const LineTitle = () => {
    return (
        <div className="librarylinetitle">
            <div className='line-number'>#</div>
            <div className='song-name'>Song</div>
            <div className='time'>Time</div>
            <div className='artist'>Artist</div>
            <div className='album'>Album</div>
        </div>
    )
}

const Line = ({song, index}) => {
    const [song_, setSong_] = useState({});


    const fetchPlayList = async() => {
        const req = await fetch(`http://localhost:4001/music/${song}`);
        const res = await req.json();
        setSong_(res);
    }

    fetchPlayList();

    return (
        <div className="libraryline">
            <div className='line-number'>{index}</div>
            <div className='song-name'>{song_['name']}</div>
            <div className='time'>{song_['time']}</div>
            <div className='artist'>{song_['artist']}</div>
            <div className='album'>{song_['album']}</div>
        </div>
    )
}

export { Line, LineTitle};