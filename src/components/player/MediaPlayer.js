import './mediaplayer.css'

const MediaPlayer = () => {
    return (
        <div className='media-player'>
            <div className='cover-slide-empty'>
                <video autoPlay muted loop id='login-video'>
                    <source src='./assets/particles.mp4'/>
                </video>
            </div>
            <div className='cover-slide-art'>
                <div className='album-art'>
                    <img src='./assets/hours.jpg' className='curr-album-cover'/>
                </div>
                <div className='media-controls'>
                    <span>
                        <button className='prev-btn'>◄◄</button>
                        <button className='play-btn'>►</button> {/*we will use state to change class and content dynamically*/}
                        <button className='next-btn'>►►</button>
                    </span>
                </div>
            </div>
            <div className='cover-slide-share'>
                <div className='circleBase'>
                    <img src='./assets/mixtape_logo.png' className='share_icon'/>
                </div>
            </div>
        </div>
    )
};

export default MediaPlayer;