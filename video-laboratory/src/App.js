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
            getSortedData(link)
                .then(
                    (transformedData) => {
                        console.log(transformedData)
                        setSortedData(transformedData)
                        setShowLoading(false)
                        setShowSplit(true)
                        console.log(sortedData)
                    }

                )
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

    if (showLoading) {
        return (
            <div className="App">
                <p>loading</p>
            </div>    
        )
    }
    if (!showSplit && !showLoading) {
        return (
            <div className="App">
                <LinkForm submitVideoLink={submitVideoLink}/>
            </div>
        )
    }
    if (showSplit && !showLoading) {
        console.log(sortedData.comments)
        return (
            <div className="App">    
                <SplitScreen 
                    link={link} 
                    title={sortedData.video.title} 
                    channel={sortedData.channel.name}
                    comments={sortedData.comments}
                /> 
            </div>    
        )
    }
}

export default App;
