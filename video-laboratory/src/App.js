import './App.css';
import { useState, useEffect } from 'react';
import LinkForm from './components/LinkForm.js'
import dataFunctions from './data/VideoDataset.js'
import apiKey from'./data/ApiKey.js'
import SplitScreen from './components/SplitScreen';
import questionData from './data/questionInputData.json';


const downloadData = dataFunctions.downloadData
const transformData = dataFunctions.transformData

function App() {

    const [link, setLink] = useState('')
    const [showSplit, setShowSplit] = useState(false)
    const [showLoading, setShowLoading] = useState(false)
    const [sortedData, setSortedData] = useState({})

    const answersToQuestions = []

    const onVideoClick = () =>{
        const electron = require("electron");
        electron.shell.openExternal(sortedData.video.link)
    }
    
    const onChannelClick = () =>{
        const electron = require("electron");
        electron.shell.openExternal(sortedData.channel.link)
    }

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

    // button press
    const onAnswerButtonPressed = (formId, index) => {
        const answerToQuestion = questionData.questionData[formId].buttons.buttonData[index]
        answersToQuestions[formId] = answerToQuestion
        console.log(answersToQuestions)
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
                    onVideoClick={onVideoClick}
                    onChannelClick={onChannelClick}
                    channelThumb={sortedData.channel.channelThumb}
                    questions={questionData.questionData}
                    onAnswerButtonPressed={onAnswerButtonPressed}
                /> 
            </div>
        )
    }
}

export default App;
