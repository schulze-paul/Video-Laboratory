
# from googleapiclient.discovery import build

authToken = 'AIzaSyDeXi9GABxJhqK8u9nj86NsayQJzMiPC_Q'

class videoData():
    videoLink = 'https://www.youtube.com/watch?v=123456'
    videoId = videoLink[32:]
    authToken

    def __init__(self, videoLink, authToken):
        self.videoLink = videoLink
        self.videoId = self.videoLink[32:]
        self.authToken = authToken


ethoData = videoData('https://www.youtube.com/watch?v=hEfDdlY62J4', authToken)

print(ethoData.authToken)
