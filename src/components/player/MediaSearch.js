const MediaSearch = ({ opt, handleMediaPlayer }) => {
    return  (
        <p onClick={handleMediaPlayer}>{opt}</p>
    )
}

export default MediaSearch;