
# from googleapiclient.discovery import build
class youtubeAPIdata:
    authToken = 'AIzaSyDeXi9GABxJhqK8u9nj86NsayQJzMiPC_Q'
    videoParameters = nan
    videoLink = nan
    channelParameters = nan
    channelLink = nan

class sortedData():
    videoLink = nan
    videoId = nan
    videoTitle = nan
    videoLength = nan
    videoViews = nan
    videoLikes = nan
    videoDislikes = nan
    videoUpload = nan

    commentsNo = nan
    commentsList = nan
    commentsPinned = nan

    channelLink = nan
    channelId = nan
    channelName = nan
    channelSubscribers = nan


    def __init__(self, videoLink):
        self.videoLink = videoLink

def getVideoData(youtubeAPIdata, videoLink):
    
    # get video id from video link
    sortedData = sortedData(videoLink)
    sortedData.video.Id = videoLinkToId(sortedData.video.Id)
    # make a request to the youtube api
    rawVideoData = getFunction(youtubeAPIdata, sortedData.video.Id.)
    
    # sort the video data
    sortedData.video.views = rawVideoData.items[0].views
    sortedData.channel.name = rawVideoData.items[0].channelName

    # get the channel id from the channel link
    