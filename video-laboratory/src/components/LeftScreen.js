import VideoCommentsDisplay from "./VideoCommentsDisplay"
import VideoDataDisplay from "./VideoDataDisplay"
import VideoView from "./VideoView"

const LeftScreen = ({link, title, channel, comments}) => {
    return (
        <div className='left-screen'>
            <VideoView link={link}/>
            <VideoDataDisplay title={title} channel={channel} />
            <VideoCommentsDisplay comments={comments}/>
        </div>
    )
}

export default LeftScreen