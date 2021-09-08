import PropTypes from 'prop-types'
import SplitPane from 'react-split-pane';
import LeftScreen from './LeftScreen.js';

const SplitScreen = ({link, title, channel, comments}) => {
    return (
        <SplitPane split="vertical" defaultSize="30%">
            <LeftScreen 
                link={link} 
                title={title} 
                channel={channel} 
                comments={comments}/>
            <p>right side</p>
        </SplitPane>
    )
}

export default SplitScreen
