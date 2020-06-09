let $ = require('jquery')


function videoLinkSubmit() {
   
   var videoLink = $('#videoLink').val();

   var d = new Date();
   var month = pad2(Number(d.getMonth())+1);
   var day = pad2(d.getDate());
   var year = pad2(d.getFullYear());

   // get data from labels
   var fourLetter = document.getElementById('fourLetter'); 
   var recordingDate = document.getElementById('recordingDate'); 
   var codingPerson = document.getElementById('codingPerson'); 
   var videoLinkLabel = document.getElementById('videoLinkLabel'); 
   var videoTitle = document.getElementById('videoTitle'); 
   var videoLength = document.getElementById('videoLength');
   var channelName = document.getElementById('channelName');

   // set up options for GET request
   var id = idFromLink(videoLink);
   var key = 'AIzaSyDeXi9GABxJhqK8u9nj86NsayQJzMiPC_Q';
   var URL = 'https://www.googleapis.com/youtube/v3/videos';
   var options = {
      part: 'snippet,statistics',
      key: key,
      id: id
   }
   
   // get video data and sort it
   $.getJSON(URL, options, function (data) {
      console.log(data);

      channelName.innerHTML = data.items[0].snippet.channelTitle;
      videoTitle.innerHTML = data.items[0].snippet.title;
      fourLetter.innerHTML = getFourLetters(channelName.innerHTML, videoTitle.innerHTML);
      videoLinkLabel.innerHTML = videoLink;
      videoLength.innerHTML = data.items[0].snippet.

      recordingDate.innerHTML = day + '-' + month + '-' + year;
      codingPerson.innerHTML = 'FA';

   });
}

function idFromLink(videoLink) { 
   VID_REGEX = 
/(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/; 
   return videoLink.match(VID_REGEX)[1]; 
} 

function getFourLetters(channelName, videoTitle) {
   // takes the first four letters of the channel name and the video title
   fourLower =  channelName.substr(0,4) + videoTitle.substr(0,4);
   fourUpper = fourLower.toUpperCase()
   return fourUpper
}

function pad2(number) {
   
   return (number < 10 ? '0' : '') + number
 
}