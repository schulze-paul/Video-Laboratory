import { useState, useEffect } from "react";

const VideoDataDisplay = ({title, channel}) => {
    return (
        <div>
            <p>{title}</p>
            <p>{channel}</p>
        </div>
    )
}

export default VideoDataDisplay