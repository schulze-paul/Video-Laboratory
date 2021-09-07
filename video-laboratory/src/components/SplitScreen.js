import SplitPane from 'react-split-pane';
import LeftScreen from './LeftScreen.js';

const SplitScreen = ({link, title, channel}) => {
    return (
        <SplitPane split="vertical" defaultSize="30%">
            <LeftScreen link={link} title={title} channel={channel}/>
            <p>right side</p>
        </SplitPane>
    )
}

export default SplitScreen
