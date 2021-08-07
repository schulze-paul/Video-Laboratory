import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
      <h1></h1>
      <label for="videoLinkInputLabel">Video Link</label>
      <input
        type="link"
        name="videoLinkInput"
        value="https://www.youtube.com/watch?v=WbEGmghn_jo"
        id="videoLinkInput"
        placeholder="Video Link"
        class="form-control"
        required
      />
      <label for="ownIdInputLabel">Set the ID</label>
      <input
        type="text"
        name="ownIdInput"
        value=""
        id="ownIdInput"
        placeholder="Own ID"
        class="form-control"
        required
      />
      <label
        onClick="javascript:goButtonPressed();location.href='./new_approach/form_page.html';"
        class="btn btn-primary"
        id="submitVideoLink"
      >
        Go!
      </label>

      <script src="./apiKey.js"></script>
      <script src="./new_approach/new_approach.js"></script>
      <script src="./new_approach/video_dataset.js"></script>
      <script src="./new_approach/html_handling.js"></script>

    </div>
  );
}

export default App;
