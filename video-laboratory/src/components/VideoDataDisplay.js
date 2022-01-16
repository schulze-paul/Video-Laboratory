import PropTypes from 'prop-types'


const VideoDataDisplay = ({title, channel, onVideoClick, onChannelClick, channelThumb}) => {
    return (
        <div className='video-data-display'>
            <p className='video-title' >{title}</p>

            <div className='channel-data'>
                <img className="channel-thumb" src={channelThumb}/>
                <p className='channel-name' >{channel}</p>
            </div>
            
        </div>
    )
}

VideoDataDisplay.defaultProps = {
    title: '',
    channel: '',
}
VideoDataDisplay.propTypes = {
    title: PropTypes.string,
    channel: PropTypes.string,
}

export default VideoDataDisplay