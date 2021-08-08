import logo from './logo.svg';
import './App.css';
import SplitPane from 'react-split-pane';


function App() {
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
          </div>
        </SplitPane>
    </div>
             
  );
}

export default App;
