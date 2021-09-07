import VideoDataDisplay from "./VideoDataDisplay"
import VideoView from "./VideoView"

const LeftScreen = ({link, title, channel}) => {
    return (
        <div>
            <VideoView link={link}/>
            <VideoDataDisplay title={title} channel={channel} />
        </div>
    )
}

export default LeftScreen