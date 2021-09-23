import VideoCommentsDisplay from "./VideoCommentsDisplay"
import VideoDataDisplay from "./VideoDataDisplay"
import VideoView from "./VideoView"

const LeftScreen = ({link, title, channel, comments, onVideoClick, onChannelClick}) => {
    return (
        <div className='left-screen'>
            <VideoView link={link}/>
            <VideoDataDisplay title={title} channel={channel} onVideoClick={onVideoClick} onChannelClick={onChannelClick} />
            <VideoCommentsDisplay comments={comments}/>
        </div>
    )
}

export default LeftScreen