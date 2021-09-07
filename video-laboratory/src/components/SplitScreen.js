import SplitPane from 'react-split-pane';
import LeftScreen from './LeftScreen.js';

const SplitScreen = ({link, sortedData}) => {
    return (
        <SplitPane split="vertical" defaultSize="30%">
            <LeftScreen link={link} sortedData={sortedData}/>
            <p>right side</p>
        </SplitPane>
    )
}

export default SplitScreen
