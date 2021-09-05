import logo from './logo.svg';
import './App.css';
import SplitPane from 'react-split-pane';
import LinkForm from './components/LinkForm.js'
import { useState } from 'react';
import downloadData from './data/VideoDataset.js'
// import apiKey from 'secrets.YOUTUBEAPIKEY'
import apiKey from'./data/ApiKey.js'



function App() {
  const [link, setLink] = useState('')


  // set Video link
  const setVideoLink = async (link) => {
    console.log(link)
    setLink(link)
    var dataset = downloadData(link, apiKey)
    //const getRawData = async () => dataset.downloadData()
    //var rawData = getRawData()

    console.log(dataset)
  }


  return (
    <div className="App">

      <SplitPane split="vertical" defaultSize="50%">
          <div className="left-pane">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
              </a>
            </header>
          </div>
          <div className="view-pane">
            <LinkForm setVideoLink={setVideoLink}/>
          </div>
        </SplitPane>
    </div>
             
  );
}

export default App;
