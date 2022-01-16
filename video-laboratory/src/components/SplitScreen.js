import SplitPane from 'react-split-pane';
import LeftScreen from './LeftScreen.js';
import RightScreen from './RightScreen.js';

const SplitScreen = ({link, title, channel, comments, onVideoClick, onChannelClick, channelThumb, questions}) => {
    return (
        <SplitPane split="vertical" defaultSize="30%">
            <LeftScreen 
                link={link} 
                title={title} 
                channel={channel} 
                comments={comments}
                onVideoClick={onVideoClick}
                onChannelClick={onChannelClick}
                channelThumb={channelThumb}/>
            <RightScreen
                questions={questions}
            />
        </SplitPane>
    )
}

export default SplitScreen
