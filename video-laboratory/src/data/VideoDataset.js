const $ = require("jquery");

let downloadData = async function(link, apiKey){        
    
    // data for the api request:
    var apiVideoUrl = "https://www.googleapis.com/youtube/v3/videos";
    var videoPart = "snippet, statistics, contentDetails, recordingDetails";
    var apiChannelUrl = "https://www.googleapis.com/youtube/v3/channels";
    var channelPart = "snippet, statistics";
    var videoId = getVideoIdFromLink(link)

    // set up the video options
    let videoOptions = {
        part: videoPart,
        id: videoId,
        key: apiKey,
    };

    console.log(videoOptions)

    try {
        // get the video data
        var rawVideoData = await $.getJSON(apiVideoUrl, videoOptions);  
        console.log(await rawVideoData);
                
        // set up channel options for GET request
        var channelId = await rawVideoData.items[0].snippet.channelId;
        var channelOptions = {
            part: channelPart,
            key: apiKey,
            id: await channelId,
        };
        
        // get channel data 
        var rawChannelData = await $.getJSON(apiChannelUrl, channelOptions);
        // log the data in the console
        console.log(rawChannelData);
        return {rawVideoData: await rawVideoData, rawChannelData: await rawChannelData};
    }                
    catch (err) {
        console.log(err)
        alert("No Connection");            
    };
};

let transformData = async function(rawData){
    var rawVideoData = rawData.rawVideoData;
    var rawChannelData = rawData.rawChannelData;


    // set the current date
    var date = new Date();
    var month = pad2(Number(date.getMonth()) + 1);
    var day = pad2(date.getDate());
    var year = pad2(date.getFullYear());

    // set up the data object
    var sortedData = {video: {}, channel: {}};
    
    // transform the video data
    sortedData.fourLetter = getFourLetters(
        rawVideoData.items[0].snippet.channelTitle,
        rawVideoData.items[0].snippet.title,
    );
    //sortedData.ownId = ownIdInput;
    sortedData.recordingDate = day + "." + month + "." + year;
    sortedData.codingPerson = "FA";

    sortedData.video.title = rawVideoData.items[0].snippet.title;
    sortedData.video.id = rawVideoData.items[0].id;
    sortedData.video.link = "https://www.youtube.com/watch?v=" + rawVideoData.items[0].id;
    sortedData.video.duration = formatVideoLength(
        rawVideoData.items[0].contentDetails.duration
    );
    sortedData.video.upvoteCount = rawVideoData.items[0].statistics.likeCount;
    sortedData.video.downvoteCount = rawVideoData.items[0].statistics.dislikeCount;
    sortedData.video.commentsCount = rawVideoData.items[0].statistics.commentCount;
    sortedData.video.viewCount = rawVideoData.items[0].statistics.viewCount;
    sortedData.video.thumbURL = rawVideoData.items[0].snippet.thumbnails.medium.url;
    sortedData.video.uploadDate = fullTimeToDate(
        rawVideoData.items[0].snippet.publishedAt
    );
    sortedData.channel.name = rawVideoData.items[0].snippet.channelTitle;
    sortedData.channel.id = rawVideoData.items[0].snippet.channelId;
    
    // transform the channel data
    sortedData.channel.publish = fullTimeToDate(
        rawChannelData.items[0].snippet.publishedAt
    );
    sortedData.channel.subsCount = rawChannelData.items[0].statistics.subscriberCount;
    sortedData.channel.videoCount = rawChannelData.items[0].statistics.videoCount;

    return sortedData;
}

// helper functions
let getVideoIdFromLink = function(videoLink) {
    var VID_REGEX =
        /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    return videoLink.match(VID_REGEX)[1];
}

let pad2 = function(number){
    return (number < 10 ? "0" : "") + number;
}

let getFourLetters = function(channelName, videoTitle) {
    // takes the first four letters of the channel name and the video title
    var channelNameNoSpaces = channelName.split(" ").join("+");
    var videoTitleNoSpaces = videoTitle.split(" ").join("+");
    var fourLower =
        channelNameNoSpaces.substr(0, 4) + videoTitleNoSpaces.substr(0, 4);
    var fourUpper = fourLower.toUpperCase();
    return fourUpper;
}

let formatVideoLength = function(apiFormat) {
    var hours;
    var minutes;
    var seconds;
    
    var matches = apiFormat.match(/\d+/g);
    
    if (matches.length === 3) {
        hours = matches[0];
        minutes = matches[1];
        seconds = matches[2];
    }
    if (matches.length === 2) {
        hours = 0;
        minutes = matches[0];
        seconds = matches[1];
    }
    if (matches.length === 1) {
        hours = 0;
        minutes = 0;
        seconds = matches[0];
    }
    
    var formattedLength = pad2(hours) + ":" + pad2(minutes) + ":" +  pad2(seconds);
    return formattedLength;
}

let fullTimeToDate = function(fullTime) {
    var year = fullTime.substring(0, 4);
    var month = fullTime.substring(5, 7);
    var day = fullTime.substring(8, 10);
    return day + "." + month + "." + year;
}

export default downloadData
