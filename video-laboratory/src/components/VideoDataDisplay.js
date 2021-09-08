import PropTypes from 'prop-types'

const VideoDataDisplay = ({title, channel}) => {
    return (
        <div>
            <p>{title}</p>
            <p>{channel}</p>
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