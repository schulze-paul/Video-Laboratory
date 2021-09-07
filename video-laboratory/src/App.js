import './App.css';
import LinkForm from './components/LinkForm.js'
import { useState, useEffect } from 'react';
import dataFunctions from './data/VideoDataset.js'
import apiKey from'./data/ApiKey.js'
import SplitScreen from './components/SplitScreen';


const downloadData = dataFunctions.downloadData
const transformData = dataFunctions.transformData

function App() {
    const [link, setLink] = useState('')
    const [showSplit, setShowSplit] = useState(false)
    const [showLoading, setShowLoading] = useState(false)
    const [sortedData, setSortedData] = useState({})

    // set Video link
    const submitVideoLink = async (link) => {
        try {
            setLink(link)
            setShowLoading(true)
            const transformedData = await getSortedData(link)
            console.log(transformedData)
            setSortedData(transformedData)
            setShowLoading(false)
            setShowSplit(true)
            console.log(sortedData)
            return transformedData
        }
        catch {
            alert('Link is not valid')
            setShowLoading(false)
            return
        }
    }
    
    // download and sort data
    const getSortedData = async (link) => {
        const rawData = await downloadData(link, apiKey)
        //console.log(rawData)
        const transformedData = await transformData(rawData)
        //console.log(await transformedData)
        return transformedData
    }

    return (
    <div className="App">
        {
            showLoading 
                ? <p>loading</p> 
                : showSplit 
                    ? <SplitScreen link={link} title={sortedData.video.title} channel={sortedData.channel.name}/> 
                    : <LinkForm submitVideoLink={submitVideoLink}/>
        }
    </div>    
    );
}

export default App;
