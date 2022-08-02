import './mediaplayer.css'
import {useRef, useState} from "react";

const MediaPlayer = ({songId, prevSong, nextSong}) => {
    const mp3Player = useRef();
    const [currentTime, setcurrentTime] = useState(0);
    const [updateValue, setUpdateValue] = useState(0);

    const play = () => {
        mp3Player.current.play();
    };

    const pause = () => {
        mp3Player.current.pause();    
    };

    const stop = () => {
        mp3Player.current.pause();
        mp3Player.current.currentTime = 0;
    };

    const prev = () => {
        mp3Player.current.pause();
        mp3Player.current.time = 0;
        prevSong();
    };
    const next = () => {
        mp3Player.current.pause();
        mp3Player.current.time = 0;
        nextSong();
    };

    //set the time to the audio element’s time value in seconds.
    const onPlaying = () => {
        setcurrentTime(mp3Player.current.currentTime);
        setUpdateValue(
        (mp3Player.current.currentTime / mp3Player.current.duration) * 100
        );
    }; 

    const song = {
        "id": 1,
        "name": "Morning, Thinker",
        "album": "THE ANSWER - Armored Core Tribute Album",
        "albumArt": "./music/album_art/armored_core_tribute.jpg",
        "artist": "Mattias Häggström Gerdt",
        "currentTime": 223000,
        "src": "./music/Morning, Thinker.mp3"
      }

    return (
        <div className='media-player'>
            <div className='cover-slide-empty'>
                <video autoPlay muted loop id='login-video'>
                    <source src='./assets/particles.mp4'/>
                </video>
            </div>
            <div className='cover-slide-art'>
                <div className='album-art'>
                    <img src={`${song.albumArt}`} className='curr-album-cover'/>
                    <audio
                        src={`${song.src}`}
                        ref={mp3Player}
                        onTimeUpdate={onPlaying} />
                    <br/>
                    <p>{currentTime}</p>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        value={updateValue}
                        onChange={(e) => {
                        const seekto = mp3Player.current.duration * (e.target.value / 100);
                        mp3Player.current.currentTime = seekto;
                        setUpdateValue(e.target.value);}} />
                </div>
                <div className='media-controls'>
                    <span>
                        <button className='prev-btn' onClick={pause}>◄◄</button>
                        <button className='play-btn' onClick={play}>►</button> {/*we will use state to change class and content dynamically*/}
                        <button className='next-btn' onClick={stop}>►►</button>
                    </span>
                </div>
            </div>
            <div className='cover-slide-share'>
                <div className='circleBase'>
                    <img src='./assets/mixtape_logo.png' className='share_icon' title='Certified banger'/>
                </div>
            </div>
        </div>
    )
};

export default MediaPlayer;