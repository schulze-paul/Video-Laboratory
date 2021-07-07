# Video Laboratory

[Motivation](#1-motivation) | [Functionality](#2-functionality) | [Development and Key Design Decisions](#3-development-and-key-design-decisions) | [Installation](#4-installation)

---

Video Laboratory is an automated video classification tool that helps video research coders reduce errors while coding video data and improve their coding speed. It is written in `JavaScript` and `HTML`/`CSS` using the `Electron` framework

<p align="center">
	<img src="https://github.com/bl4ckp4nther4/Video-Categorization-Application/blob/master/images/screenshots/GUI_overview.PNG" alt="GUI overview" title="GUI overview" width="450"/>
</p>

## 1. Motivation

This application was needed in the context of a research project where videos and channels on YouTube are analyzed.
The application was part of the data collection process.
The data collection process that was used before consisted of either manually copying data from the website into an excel sheet or entering a number in the excel sheet referring to the answer to a multiple choice question.
This had to be done for hundreds of videos.

<p align="center">
	<img src="https://github.com/bl4ckp4nther4/Video-Categorization-Application/blob/master/images/screenshots/old_data_collection_process.PNG?" alt="Old data collection process" title="Old data collection process"/>
</p>
This process had two problems that could easily be fixed with software:

1. Manually copying the data from the website is very inefficient.
2. Writing a code to the multiple choice question is very unintuitive and sometimes requires a lot of scrolling to get from the excel cell with the question and the answer codes to the cell where the answer needs to be written.

Especially the first problem motivated me to start the project. The second problem was addressed later for completeness.

## 2. Functionality

### Data Retrieval from the YouTube API

<p>
	<img src="https://github.com/bl4ckp4nther4/Video-Categorization-Application/blob/master/images/screenshots/video_data.PNG?" alt="preview video data" title="preview video data" width="250"/>
</p>

Some data that is needed is readily available through the `YouTube API`. This includes the following data:

- Video data includes: `link`, `title`, `duration`, `upload_date`, `view_count`, `upvote_count`, `downvote_count`, `comments_count`
- Channel data includes: `link`, `name`, `join_date`, `video_count`, `subscribers_count`

Using the `link` to a video as starting point, data about the video is collected through the `YouTube API`.
With the channel link collected from the video data, the needed channel data is retrieved from the `YouTube API`.
All this data is cached while the user fills out the form.

### Manual Data Entry

Some required data is not directly available through the `YouTube API` or requires interpretation of for example the video content or comments. This data is collected manually through a form where the user can click on the answer to a multiple choice question or enter text in a text field.
Questions that need to be manually filled out include:

> Are there any other eye-catching characteristics (e.g. colors) of the thumbnail?
>
> How often are videos uploaded by the channel?
>
> Is there negative feedback to the producers in the comments?

The answers are saved along the data from the `YouTube API`.

<p>
	<img src="https://github.com/bl4ckp4nther4/Video-Categorization-Application/blob/master/images/screenshots/form_multiple_choice.PNG" alt="preview form" title="preview form" width="550"/>
</p>

### Data Transformation and Export

At this point all the required data is available. The next step is to transform the raw data into the required format needed in the excel sheet. For example the `YouTube API` returns the upload time of a video as `datetime`, whereas in the excel we just need the date in the format `DD.MM.YYYY`. After transformation, each data point gets an excel cell assigned.

An excel sheet is created and the data is written into the excel sheet.

## 3. Development and Key Design Decisions

### Why Electron?

<img src="https://github.com/bl4ckp4nther4/Video-Categorization-Application/blob/master/images/screenshots/384px-Electron_Software_Framework_Logo.svg.png" alt="Electron"
	title="Electron" width="150" />

Starting out with this project, the first decision I had to make was what programming language / platform to use. I had some general requirements to the project that I considered key:
I wanted

- an intuitive GUI
- a fast development process
- cross-platform usability

At the time I had strong experience in `MATLAB`, `Python` and `Java` and knew little about `JavaScript` and `HTML`/`CSS`.

I had a lot of `MATLAB` experience and strongly considered using it for this project. I was very familiar with the syntax and had already developed a GUIs in `MATLAB`. The development process overall probably would have gone a lot smoother with using `MATLAB`, especially working with the `YouTube API`. However I decided that it was not the optimal solution to the problem.

`Java` was another strong candidate as I already had experience in developing GUIs in `Java`, but in my research I found that is was mostly considered outdated and not the best candidate for the project.

From my research I found that some of the best platforms for a good GUI are `Electron` and `C++`. `C++` is favored for lightweight applications where performance is the highest priority. However the development time for `C++` would have been much higher than electron. This is why I decided against `C++`.

I had no experience in developing GUIs in `Python` and after looking into it I quickly decided against it. As with `MATLAB`, developing the data handling would have been much faster in `Python`, but I was not satisfied with the GUI development options.

After a lot of research and trials in `MATLAB`, `Python` and `Electron`, I decided to use the `Electron` framework because it promised a good GUI with the most control. Also `JavaScript` and `HTML`/`CSS` are some of the most important front end platforms generally and with the syntax similarity of `JavaScript` to `Java`, where I had experience, I decided to work with `Electron`.

### Creating the GUI in HTML/CSS

<p align="center">
	<img src="https://github.com/bl4ckp4nther4/Video-Categorization-Application/blob/master/images/screenshots/GUI_detail.PNG" alt="GUI detail" title="GUI detail" width="550"/>
</p>

The main objective of the GUI was to reduce user errors and the time of completing the task for one video. This was achieved by:

- showing as much information as possible on the screen
- showing the questions and answers in clear, bold letters
- showing clearly which answers are selected
- showing the banner with base video data on always on top
- giving quick access to the video web page, channel web page and a video search web page

User errors might include: putting the answer to a question in the wrong excel cell, confusing the code of two answers, not filling out every answer and writing durations or dates in the wrong format. All of these errors are made impossible with using the application.

Making the whole process of answering each question more streamlined does not only reduce errors, but allows the user to spend their time thinking about the question and not about answer codes and excel cells.

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

### Working in JavaScript

Working in `JavaScript` was new and the asynchronous and nested functionality of requesting the video data `JSON`, then waiting for the reply, then based on the reply requesting the channel data `JSON` and again waiting for the reply was very confusing at first. I found that working with the excel sheet was unintuitive, and I was not happy with the way I implemented this functionality in the end. However it worked fine, so I left it as it was. This is where my lack of experience in `JavaScript` hurt the development process.

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

# 4. Installation

Installation requires:

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
