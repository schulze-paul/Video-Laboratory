import PropTypes from 'prop-types'


const VideoDataDisplay = ({title, channel, onVideoClick, onChannelClick}) => {
    return (
        <div className='video-data-display'>
            <p className='video-title' onClick={onVideoClick}>{title}</p>
            <p className='channel-name' onClick={onChannelClick}>{channel}</p>
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