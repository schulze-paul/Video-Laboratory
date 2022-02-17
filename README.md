
<img align="center" src="https://github.com/schulze-paul/Video-Laboratory/blob/split_view/images/screenshots/logo_video_lab2.png?raw=true" height=70>

# VideoLab Classification Tool for Researchers

<p>
	Author: <a href="https://schulze-paul.github.io">Paul Schulze</a>
</p>

<p align="center">
	<img src="https://github.com/schulze-paul/Video-Laboratory/blob/split_view/images/screenshots/VideoLab_demo_video.gif?raw=true" alt="Video Lab Demo" title="GUI overview" width="852"/>
</p>

## Welcome to VideoLab

VideoLab is an automated video classification tool that automatically collects available data about a video from the YouTube API. But some questions can not be answered with data from YouTube, and this is where the real value of VideoLab lies.  
You can comfortably fill the form while the video plays right inside of the interface with all of the familiar controls that you know from YouTube. Comments are also visible right below the video.

VideoLab is built on the `JavaScript` library [ReactJS](https://reactjs.org/) using the [Electron](https://www.electronjs.org/) framework.

- [Installation](#installation)
- [How It Works](#how-it-works)


## Installation

### Windows

The newest release [v0.1.4](https://github.com/bl4ckp4nther4/Video-Laboratory/releases/tag/v0.1.4) is available [here](https://github.com/bl4ckp4nther4/Video-Laboratory/releases/download/v0.1.4/Video-Laboratory-win32-x64.zip).

### Electron

This app can be run on any platform in Electron. Installation requires:

```
electron: 9.0.4
electron-packager: 14.2.1
jest: 26.0.1
core-js: 3.6.5
dialog: 0.3.1
electron-dialog: 2.0.0
excels: 4.0.1
fs: 0.0.1
jquery: 3.5.1
react-app-polyfill: 1.0.6
regenerator-runtime: 0.13.5
```

## How it works

You paste the link and everything else is taken care of behind the scenes. VideoLab sends a request to the YouTube API along with the video id and saves relevant data such as:
- Video: `link`, `title`, `duration`, `upload_date`, `view_count`, `upvote_count`, `comments_count`
- Channel: `link`, `name`, `join_date`, `video_count`, `subscribers_count`

Using `react-player`, VideoLab starts playing the video and shows the video title, the channel title, the channel icon and the comments underneath.
Meanwhile, you can start answering some of the questions that are more complicated in nature. 

After you are done, the data is exported into an excel file that can be integrated into further research.

## Development and Key Design Decisions

### Electron

<img src="https://github.com/bl4ckp4nther4/Video-Categorization-Application/blob/master/images/screenshots/384px-Electron_Software_Framework_Logo.svg.png" alt="Electron"
	title="Electron" width="70" />

Starting out with this project, the first decision I had to make was what programming language / platform to use. I had some general requirements to the project that I considered key:
I wanted

- an intuitive GUI
- a fast development process
- cross-platform usability

Electron was the best choice because it met all of my requirements while being very flexible with the UX/UI design.
I had to learn how to work with `JavaScript` and Electron for this project, but I believe it was a success.

### React

<img src="https://github.com/schulze-paul/Video-Laboratory/blob/master/images/screenshots/react_icon.png?raw=true" alt="Electron"
	title="Electron" width="70" />

I was able to work quite well with pure `JavaScript`, but I wanted some features that would be hard to implement without a framework.
A video player in the UI and a flexible devider that changes the size of the video section and the size of the form section.
I also wanted two different pages for each step in using the program.

All of these considerations led me to use a JavaScript library, with ReactJS being the most popular, so I went with ReactJS.

### Getting the Data from YouTube

My first intuition for getting the video data was to develop a web crawler that would download the `HTML` of the video page and channel page where most of the needed information would have been available. I even would have been able to collect some data that was not available through the `YouTube API`, such as social media links. However this process would have been a lot messier and after some trial with the `YouTube API` I decided against a web crawler.

The first big hurdle was getting to a working prototype. I found the answer to most of my questions in the documentation of the `YouTube API` and of `Electron`. But at this point I was new in working with an `API`, with `Electron`, with `JavaScript` and with `HTML`/`CSS`. So I focused first on getting the data that I needed from the `YouTube API` with `Python`, and then implemented the same functionality in `JavaScript`.

```python
video:
	commentsCount: "7860972"
	downvoteCount: "319701"
	duration: "00:03:03"
	id: "WMweEpGlu_U"
	link: "https://www.youtube.com/watch?v=WMweEpGlu_U"
	thumb URL: "https://i.ytimg.com/vi/WMweEpGlu_U/mqdefault.jpg"
	title: "BTS (방탄소년단) 'Butter' Official MV"
	uploadDate: "21.05.2021"
	upvoteCount: "18171920"
	viewCount: "4280769
channel:
	id: "UC3IZKseVpdzPSBaWxBxundA"
	name: "HYBE LABELS"
	publish: "04.06.2008"
	subsCount: "58200000"
	viscount: "630"00"
```

### Converting the Questions and Answers to JavaScript in Python

The application has to create the form for the user to fill out and select multiple choice options. At start the application dynamically loads a list of question objects which contain all the needed information to create the section of the form for one question block, and then loops over all question blocks

I created a `Python` script that dynamically creates a `JavaScript` text file with the object list, because manually writing the list in `JavaScript` would have been a very long and repetitive process.

```javascript
(questionData[12] = {
	formId: 12,
	question: "Is a person visible on the thumbnail (preview picture)?",
	typingInput: false,
	buttonLabel: [
		"No",
		"Yes, the presenter or the presenters",
		"Yes, a person the video relates to",
		"Yes, different persons which the video relates",
		"Reference unclear",
		"Not apparent",
	],
	buttonData: [77, 1, 2, 3, 4, 66],
}),
```

