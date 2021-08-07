

// data for the api request:
var api_video_url = "https://www.googleapis.com/youtube/v3/videos";
var video_part = "snippet, statistics, contentDetails, recordingDetails";
var api_channel_url = "https://www.googleapis.com/youtube/v3/channels";
var channel_part = "snippet, statistics";


  // get video data and sort it
function getVideoData(videoId, videoOptions) {

  // get the video data from the api
  $.getJSON(api_video_url, videoOptions, function (rawVideoData) {
    console.log(rawVideoData);

    channelId = rawVideoData.items[0].snippet.channelId

    // save the date and  get the channeldata
    date = new Date();
    sortedVideoData = sortVideoData(rawVideoData, ownIdInput, date);

    // set up channel options for GET request
    var channelOptions = {
      part: channel_part,
      key: apiKey,
      id: sortedVideoData.channel.id,
    };

    // get channel data and sort it
    $.getJSON(api_channel_url, channelOptions, function (rawChannelData) {
      // log the data in the console
      console.log(rawChannelData);
      sortedVideoData = sortChannelData(sortedVideoData, rawChannelData);
      console.log(sortedVideoData);

      // show preview of video title and thumbnail
      var videoTitleLabel = document.getElementById("videoTitleLabel");
      videoTitleLabel.innerHTML = sortedVideoData.video.title;
      var videoThumb = document.getElementById("videoThumb");
      videoThumb.src = sortedVideoData.video.thumbURL;

      // enable export button
      exportButton = document.getElementById("exportButton");
      exportButton.disabled = false;

      // after loading data, disable go button and link input field
      goButton = document.getElementById("submitVideoLink");
      goButton.disabled = true;
      videoLinkInput = document.getElementById("videoLinkInput");
      videoLinkInput.disabled = true;

      createForm(sortedVideoData);
    });
  }).fail(function () {
    alert("No Connection");
  });

}