import ReactPlayer from 'react-player'

const VideoView = ({link, containerWidth}) => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer   
                className='react-player' 
                url={link} 
                playing={true} 
                controls={true} 
                width="100%"
                height="100%"
            />
        </div>
    )
}

export default VideoView
