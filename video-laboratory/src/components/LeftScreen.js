import VideoDataDisplay from "./VideoDataDisplay"
import VideoView from "./VideoView"

const LeftScreen = ({link, sortedData}) => {
    return (
        <div>
            <VideoView link={link}/>
            <VideoDataDisplay sortedData={sortedData} />
        </div>
    )
}

export default LeftScreen