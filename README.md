# Video Categorization Application

![GUI overview](https://github.com/bl4ckp4nther4/Video-Categorization-Application/blob/master/images/screenshots/GUI_overview.PNG?raw=true)

## 1. Motivation

This Application was needed in the context of a research project where videos and channels on YouTube are analysed.
It was part of the data collection process.
The data collection process that was used before consisted of either manually copying data from the website into an excel sheet or entering a number in the excel sheet referring to the answer to a multiple choice question.
This had to be done for hundreds of videos.

![Old data collection process](https://github.com/bl4ckp4nther4/Video-Categorization-Application/blob/master/images/screenshots/old_data_collection_process.PNG
?raw=true)

This process had two problems that could easily be fixed with software:

1. Manually copying the data from the website is very inefficient.
2. Writing a code to the multiple choice question is very unintuitive and sometimes required a lot of scrolling to get from the excel cell with the question and the answer codes to the cell where the answer needs to be written.

Especially the first problem motivated me to start the project. The second problem was adressed later for completeness.

## 2. Functionality

### Data retrieval from the YouTube API

![preview video data](https://github.com/bl4ckp4nther4/Video-Categorization-Application/blob/master/images/screenshots/video_data.PNG?raw=true)
Some of the data that is needed is readily available through the YouTube API. This includes the following data:

About the video

- link
- title
- duration
- upload date
- view count
- upvote count
- downvote count
- comments count

About the channel

- link
- name
- join date
- video count
- subscribers count

Using the link to a video as starting point, data about the video is collected through the YouTube API.
With the channel link collected from the video data, the needed channel data is retrieved from the Youtube API.
All this data is cached while the user fills out the form.

### Manual data entry

Some of the required data is not directly available through the YouTube API or requires interpretation of for eample the video content or comments. This Data is collected manually through a form where the user can click on the answer to a multiple choice question or enter text in a text field.
Questions that need to be manually filled out include:

![preview form](https://github.com/bl4ckp4nther4/Video-Categorization-Application/blob/master/images/screenshots/form_multiple_choice.PNG?raw=true)

- Are there any other eye-catching characteristics (e.g. colours) of the thumbnail?
- How often are videos uploaded by the channel?
- Is there negative feedback to the producers in the comments?

The answers are saved along the data from the YouTube API.

### Data transformation and export

At this point all the requiered data is available. The next step is to transform the raw data into the required format needed in the excel sheet. For example the YouTube API returns the upload time of a video as a datatime object, whereas in the excel we just need the date in the format DD.MM.YYYY. After transformation, each datapoint gets an excel cell assigned.

An excel sheet is created and the data is written into the excel sheet.

## 3. Development and key design decisions

### Why electron?

Starting out with this project, the first decision I had to make was what programming language / platform to use. I had some general requirements to the project that I considered key:
I wanted

- an intuitive GUI
- a fast development process
- cross-platform usability

At the time I had strong experience in MATLAB, Python and Java and knew little about JavaScript and HTML/CSS.

I had a lot of MATLAB experience and strongly considered using it for this project. I was very familiar with the syntax and had already developed a GUIs in MATLAB. The development process overall probably would have gone a lot smoother with using MATLAB, especially working with the YouTube API. However I decided that it was not the optimal solution to the problem.

Java was another strong candidate as I already had experience in developing GUIs in Java, but in my research I found that is was mostly considered outdated and not the best candidate for the project.

From my research I found that some of the best platforms for a good GUI are electron and C++. C++ is favored for light weight applications where performance is the highest priority. However the development time for C++ would have been much higher than electron. This is why I decided against C++.

I had no experience in developing GUIs in Python and after looking into it I quickly decided against it. As with MATLAB, developing the data handeling would have been much faster in Python, but I was not satisfied with the GUI development options.

After a lot of research and trials in MATLAB and Python, I decided to use the Electron framework because it promised a good GUI with the most control. Also JavaScript and HTML/CSS are some of the most important front end platforms generally and with the syntax similarity of JavaScript to Java, where I had experience, I decided to work with Electron.

### Getting the data from YouTube

My first Intuition for getting the video data was to develop a web crawler that would download the HTML of the video page and channel page where most of the needed information would have been available. I even would have been able to collect some data that was not available through the YouTube API, such as social media links. However this process would have been a lot messier and after some trial with the YouTube API I decided against a web crawler.

The first big hurdle was getting to a working prototype. I found the answer to most of my questions in the documentation of the YouTube API and of Electron. But at this point I was new in working with an API, with Electron, with JavaScript and with HTML/CSS. So I focussed first on getting the data that I needed from the Youtube API with Python, and then implemented the same functionality in JavaScript.

### Working in JavaScript

Working in JavaScript was new and the asynchronous and nested functionality of requesting the video data JSON, then waiting for the reply, then based on the reply requesting the channel data JSON and again waiting for the reply was very confusing at first. I found that working with the excel sheet was unintuitive and I was not happy with the way I implemented this functionality in the end. However it worked fine, so I left it as it was. This is where my lack of experience in JavaScript hurt the development process.

### Converting the questions and answers in Python

To create the form for the user to fill out and select multiple choice options, the application dynamically loads a list of question objects which contain all the needed information to create the section of the form for one question:
The question itself, if it is a multiple choice answer or a text answer, or both, and then the multiple choice options with the labels and codes for each label.
I created a python script that would dynamically create a .js text file with the object list from a csv file because manually writing the list in JavaScript would have been a very long and cumbersome process.

### Creating the GUI in HTML/CSS

- showing as much information as possible on the screen
- showing the banner with base video data on top
- minimize scrolling
- checking for user errors

# Installation

Installation requires:

- electron: 9.0.4
- electron-packager: 14.2.1
- jest: 26.0.1
- core-js: 3.6.5
- dialog: 0.3.1
- electron-dialog: 2.0.0
- exceljs: 4.0.1
- fs: 0.0.1
- jquery: 3.5.1
- react-app-polyfill: 1.0.6
- regenerator-runtime: 0.13.5
