

class VideoDataset {

    constructor(videoLink, apiKey) {
        this.videoLink = videoLink;
        this.apiKey = apiKey;
    }

    async downloadData() {        
        
        // data for the api request:
        var apiVideoUrl = "https://www.googleapis.com/youtube/v3/videos";
        var videoPart = "snippet, statistics, contentDetails, recordingDetails";
        var apiChannelUrl = "https://www.googleapis.com/youtube/v3/channels";
        var channelPart = "snippet, statistics";


        // set up the video options
        var videoId = this.getVideoIdFromLink(this.videoLink);
        var videoOptions = {
            part: videoPart,
            key: this.apiKey,
            id: videoId,
        };

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
    
    transformData(rawData) {
        var rawVideoData = rawData.rawVideoData;
        var rawChannelData = rawData.rawChannelData;


        // set the current date
        var date = new Date();
        var month = this.pad2(Number(date.getMonth()) + 1);
        var day = this.pad2(date.getDate());
        var year = this.pad2(date.getFullYear());

        // set up the data object
        this.sortedData = {video: {}, channel: {}};
        
        // transform the video data
        this.sortedData.fourLetter = this.getFourLetters(
            rawVideoData.items[0].snippet.channelTitle,
            rawVideoData.items[0].snippet.title,
        );
        this.sortedData.ownId = ownIdInput;
        this.sortedData.recordingDate = day + "." + month + "." + year;
        this.sortedData.codingPerson = "FA";

        this.sortedData.video.title = rawVideoData.items[0].snippet.title;
        this.sortedData.video.id = rawVideoData.items[0].id;
        this.sortedData.video.link = "https://www.youtube.com/watch?v=" + rawVideoData.items[0].id;
        this.sortedData.video.duration = this.formatVideoLength(
            rawVideoData.items[0].contentDetails.duration
        );
        this.sortedData.video.upvoteCount = rawVideoData.items[0].statistics.likeCount;
        this.sortedData.video.downvoteCount = rawVideoData.items[0].statistics.dislikeCount;
        this.sortedData.video.commentsCount = rawVideoData.items[0].statistics.commentCount;
        this.sortedData.video.viewCount = rawVideoData.items[0].statistics.viewCount;
        this.sortedData.video.thumbURL = rawVideoData.items[0].snippet.thumbnails.medium.url;
        this.sortedData.video.uploadDate = this.fullTimeToDate(
            rawVideoData.items[0].snippet.publishedAt
        );
        this.sortedData.channel.name = rawVideoData.items[0].snippet.channelTitle;
        this.sortedData.channel.id = rawVideoData.items[0].snippet.channelId;
        
        // transform the channel data
        this.sortedData.publish = this.fullTimeToDate(
            rawChannelData.items[0].snippet.publishedAt
          );
          this.sortedData.channel.subsCount = rawChannelData.items[0].statistics.subscriberCount;
          this.sortedData.channel.videoCount = rawChannelData.items[0].statistics.videoCount;
    }

    



    // helper functions
    getVideoIdFromLink(videoLink) {
        var VID_REGEX =
          /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        return videoLink.match(VID_REGEX)[1];
    }
    
    pad2(number) {
        return (number < 10 ? "0" : "") + number;
    }
    
    getFourLetters(channelName, videoTitle) {
        // takes the first four letters of the channel name and the video title
        var channelNameNoSpaces = channelName.split(" ").join("+");
        var videoTitleNoSpaces = videoTitle.split(" ").join("+");
        var fourLower =
          channelNameNoSpaces.substr(0, 4) + videoTitleNoSpaces.substr(0, 4);
        var fourUpper = fourLower.toUpperCase();
        return fourUpper;
    }

    formatVideoLength(apiFormat) {
        var hours;
        var minutes;
        var seconds;
        
        var matches = apiFormat.match(/\d+/g);
      
        if (matches.length == 3) {
          hours = matches[0];
          minutes = matches[1];
          seconds = matches[2];
        }
        if (matches.length == 2) {
          hours = 0;
          minutes = matches[0];
          seconds = matches[1];
        }
        if (matches.length == 1) {
          hours = 0;
          minutes = 0;
          seconds = matches[0];
        }
      
        var formattedLength = this.pad2(hours) + ":" + this.pad2(minutes) + ":" + this. pad2(seconds);
        return formattedLength;
    }
    
    fullTimeToDate(fullTime) {
        var year = fullTime.substring(0, 4);
        var month = fullTime.substring(5, 7);
        var day = fullTime.substring(8, 10);
        return day + "." + month + "." + year;
    }
};