import './App.css';
import LinkForm from './components/LinkForm.js'
import { useState } from 'react';
import dataFunctions from './data/VideoDataset.js'
import apiKey from'./data/ApiKey.js'
import SplitScreen from './components/SplitScreen';

const downloadData = dataFunctions.downloadData
const transformData = dataFunctions.transformData

function App() {
    const [link, setLink] = useState('')
    const [showSplit, setShowSplit] = useState(false)
    const [sortedData, setSortedData] = useState(null)

    // set Video link
    const submitVideoLink = async (link) => {
        setLink(link)
        getSortedData(link).then(function(data) {
            setSortedData(data)
            console.log(sortedData)
            setShowSplit(true)
        })
            
    }
    
    // download and sort data
    const getSortedData = async (link) => {
        const rawData = await downloadData(link, apiKey)
        console.log(rawData)
        const sortedData = transformData(rawData)
        console.log(sortedData)
        return sortedData
    }

    return (
    <div className="App">
        {showSplit ? <SplitScreen link={link} sortedData={sortedData}/> : <LinkForm submitVideoLink={submitVideoLink}/>}
    </div>    
    );
}

export default App;
