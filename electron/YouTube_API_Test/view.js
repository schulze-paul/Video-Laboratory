let $ = require("jquery");
let fs = require("fs");

// data for the api request:
var key = "AIzaSyDeXi9GABxJhqK8u9nj86NsayQJzMiPC_Q";
var apiVideoURL = "https://www.googleapis.com/youtube/v3/videos";
var videoPart = "snippet, statistics, contentDetails, recordingDetails";
var apiChannelURL = "https://www.googleapis.com/youtube/v3/channels";
var channelPart = "snippet, statistics";

// global sorted data variable:
sortedVideoData = {};

function goButtonPressed() {
  // function is executed when the button is pressed,

  // the id set by the person
  var ownId = $("#ownIdInput").val();

  var videoLink = $("#videoLinkInput").val();
  var videoId = idFromLink(videoLink);

  // options for the get request to the youtube api
  var videoOptions = {
    part: videoPart,
    key: key,
    id: videoId,
  };

  // get video data and sort it
  $.getJSON(apiVideoURL, videoOptions, function (rawVideoData) {
    console.log(rawVideoData);

    date = new Date();
    sortedVideoData = sortVideoData(rawVideoData, ownId, date);

    // set up channel options for GET request
    var channelOptions = {
      part: channelPart,
      key: key,
      id: sortedVideoData.channel.id,
    };

    // get channel data and sort it
    $.getJSON(apiChannelURL, channelOptions, function (rawChannelData) {
      // log the data in the console
      console.log(rawChannelData);
      sortedVideoData = sortChannelData(sortedVideoData, rawChannelData);
      console.log(sortedVideoData);
    });
  });

  // enable export button
  exportButton = document.getElementById("exportButton");
  exportButton.disabled = false;
  createFormButton = document.getElementById("createForm");
  createFormButton.disabled = false;
}

function sortVideoData(data, ownId, date) {
  var month = pad2(Number(date.getMonth()) + 1);
  var day = pad2(date.getDate());
  var year = pad2(date.getFullYear());

  sortedData = {};
  sortedData.video = {};
  sortedData.channel = {};

  sortedData.fourLetter = getFourLetters(
    data.items[0].snippet.channelTitle,
    data.items[0].snippet.title
  );
  sortedData.ownId = ownId;
  sortedData.recordingDate = day + "-" + month + "-" + year;
  sortedData.codingPerson = "FA";

  sortedData.video.title = data.items[0].snippet.title;
  sortedData.video.id = data.items[0].id;
  sortedData.video.link = "https://www.youtube.com/watch?v=" + data.items[0].id;
  sortedData.video.duration = data.items[0].contentDetails.duration;
  sortedData.video.upvoteCount = data.items[0].statistics.likeCount;
  sortedData.video.downvoteCount = data.items[0].statistics.dislikeCount;
  sortedData.video.commentsCount = data.items[0].statistics.commentCount;
  sortedData.video.viewCount = data.items[0].statistics.viewCount;

  sortedData.channel.name = data.items[0].snippet.channelTitle;
  sortedData.channel.id = data.items[0].snippet.channelId;

  return sortedData;
}

function sortChannelData(videoData, channelData) {
  videoData.channel.publish = channelData.items[0].snippet.publishedAt;
  videoData.channel.subsCount = channelData.items[0].statistics.subscriberCount;
  videoData.channel.videoCount = channelData.items[0].statistics.videoCount;

  return videoData;
}

function writeDataJSON(newData, fileName) {
  //check if file exists
  $.ajax({
    url: `${fileName}.json`,
    type: "HEAD",
    error: function () {
      // file does not exist
      data = [];
    },
    success: function () {
      // file exists
      // load file and any data it contains
      data = [
        JSON.parse(
          fs.readFileSync(fileName + ".json", function (err) {
            if (err) {
              console.log(err);
            } else {
              //Everything went OK!
            }
          })
        ),
      ];
    },
  });

  // add the new data
  data.push(newData);

  //convert data into json format
  jsonData = JSON.stringify(data);

  //write the json data to a file on disk
  fs.writeFile(fileName + ".json", jsonData, "utf8", function (err) {
    if (err) {
      console.log(err);
    } else {
      //Everything went OK!
    }
  });
}

function idFromLink(videoLink) {
  VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  return videoLink.match(VID_REGEX)[1];
}

function getFourLetters(channelName, videoTitle) {
  // takes the first four letters of the channel name and the video title
  fourLower = channelName.substr(0, 4) + videoTitle.substr(0, 4);
  fourUpper = fourLower.toUpperCase();
  return fourUpper;
}

function pad2(number) {
  return (number < 10 ? "0" : "") + number;
}

function writeDataExcelFile(sortedData, fileName) {
  console.log(sortedData);

  // polyfills for any missing functionalities
  require("react-app-polyfill/ie9");
  require("react-app-polyfill/stable");

  // polyfills required by exceljs
  require("core-js/modules/es.promise");
  require("core-js/modules/es.string.includes");
  require("core-js/modules/es.object.assign");
  require("core-js/modules/es.object.keys");
  require("core-js/modules/es.symbol");
  require("core-js/modules/es.symbol.async-iterator");
  require("regenerator-runtime/runtime");

  const Excel = require("exceljs/dist/es5");
  // A new Excel Work Book
  var workbook = new Excel.Workbook();

  // Some information about the Excel Work Book.
  workbook.creator = "Farisa Afzal";

  // Create a sheet
  var sheet = workbook.addWorksheet("Sheet1");
  // A table header

  // find locations of all the data which can be put into the excel sheet
  {
    const fourLetter = sheet.getCell("C1");
    const recordingDate = sheet.getCell("D1");
    const codingPerson = sheet.getCell("E1");
    const videoLink = sheet.getCell("F1");
    const videoTitle = sheet.getCell("G1");
    const ownId = sheet.getCell("H1");
    const videoDuration = sheet.getCell("I1");
    const channelName = sheet.getCell("J1");
    const channelSubs = sheet.getCell("Q1");
    const personalWebsite = sheet.getCell("S1");
    const tiktokBin = sheet.getCell("T1");
    const tiktokLink = sheet.getCell("U1");
    const instagramBin = sheet.getCell("V1");
    const instagramLink = sheet.getCell("W1");
    const facebookBin = sheet.getCell("X1");
    const facebookLink = sheet.getCell("Y1");
    const twitterBin = sheet.getCell("Z1");
    const twitterLink = sheet.getCell("AA1");
    const otherSocialmedia = sheet.getCell("AB1");
    const videoDate = sheet.getCell("AG1");
    const channelJoin = sheet.getCell("AD1");
    const channelVideoCount = sheet.getCell("AE1");
    const videoViews = sheet.getCell("AH1");
    const videoUpvotes = sheet.getCell("AI1");
    const videoDownvotes = sheet.getCell("AJ1");
    const commentsCount = sheet.getCell("AX1");
    const commentsPinned = sheet.getCell("AY1");
  }

  // data from the questionnaire
  {
    questionCell = [];
    question[10] = sheet.getCell("K1");
    question[11] = sheet.getCell("L1");
    question[12] = sheet.getCell("M1");
    question[13] = sheet.getCell("N1");
    question[14] = sheet.getCell("O1");
    question[15] = sheet.getCell("P1");
    question[17] = sheet.getCell("R1");
    question[28] = sheet.getCell("AC1");
    question[31] = sheet.getCell("AF1");
    question[36] = sheet.getCell("AK1");
    question[37] = sheet.getCell("AL1");
    question[38] = sheet.getCell("AM1");
    question[39] = sheet.getCell("AN1");
    question[40] = sheet.getCell("AO1");
    question[41] = sheet.getCell("AP1");
    question[42] = sheet.getCell("AQ1");
    question[43] = sheet.getCell("AR1");
    question[44] = sheet.getCell("AS1");
    question[45] = sheet.getCell("AT1");
    question[46] = sheet.getCell("AU1");
    question[47] = sheet.getCell("AV1");
    question[48] = sheet.getCell("AW1");
    question[51] = sheet.getCell("AZ1");
    question[52] = sheet.getCell("BA1");
    question[53] = sheet.getCell("BB1");
    question[54] = sheet.getCell("BC1");
    question[55] = sheet.getCell("BD1");
    question[56] = sheet.getCell("BE1");
    question[57] = sheet.getCell("BF1");
    question[58] = sheet.getCell("BG1");
    question[59] = sheet.getCell("BH1");
    question[60] = sheet.getCell("BI1");
    question[61] = sheet.getCell("BJ1");
    question[62] = sheet.getCell("BK1");
    question[63] = sheet.getCell("BL1");
    question[64] = sheet.getCell("BM1");
    question[65] = sheet.getCell("BN1");
    question[66] = sheet.getCell("BO1");
    question[67] = sheet.getCell("BP1");
    question[68] = sheet.getCell("BQ1");
  }

  //put the video data into the specific cells

  fourLetter.value = sortedData.fourLetter;
  ownId.value = sortedData.ownId;
  recordingDate.value = sortedData.recordingDate;
  codingPerson.value = sortedData.codingPerson;

  videoTitle.value = sortedData.video.title;
  videoLink.value = sortedData.video.link;
  videoDuration.value = sortedData.video.duration;
  videoUpvotes.value = sortedData.video.upvoteCount;
  videoDownvotes.value = sortedData.video.downvoteCount;
  commentsCount.value = sortedData.video.commentsCount;
  videoViews.value = sortedData.video.viewCount;

  channelName.value = sortedData.channel.name;
  channelJoin.value = sortedData.channel.publish;
  channelSubs.value = sortedData.channel.subsCount;
  channelVideoCount.value = sortedData.channel.videoCount;

  // Save Excel on Hard Disk
  workbook.xlsx.writeFile(fileName + ".xlsx").then(function () {
    // Success Message
    alert("File Saved");
  });
}

function createForm(sortedData) {
  var formId = 10;
  var question = "Is the video a collaborative project?";
  var typeInput = false;
  var buttonLabel = [
    "No",
    "Yes, between Youtubers",
    "Yes, with an External Partner",
    "Not apparent",
  ];
  var buttonData = [77, 1, 2, 66];

  if (typeInput == true) {
    $("body").append(`
      <article class="item" data-key="${formId}">
        <h4>${question}</h4>
        <input
        type="${type}"
        name="input${formId}"
        value=""
        id="input${formId}"
        placeholder="${placeholder}"
        class="form-control"
        required
      />
      </article>
    `);
  }

  if (typeInput == false) {
    if ((buttonCount = 4)) {
      $("body").append(`
        <article class="item" data-key="article${formId}">
          <h4>${question}</h4>
          
          <button
          onclick="javasript:formButtonPressed(${formId},${buttonData[0]})"
          class="btn btn-primary"
          id="button0${formId}"
          >
          ${buttonLabel[0]}
          </button>

          <button
          onclick="javasript:formButtonPressed(${formId},${buttonData[1]})"
          class="btn btn-primary"
          id="button1${formId}"
          >
          ${buttonLabel[1]}
          </button>

          <button
          onclick="javasript:formButtonPressed(${formId},${buttonData[2]})"
          class="btn btn-primary"
          id="button2${formId}"
          >
          ${buttonLabel[2]}
          </button>

          <button
          onclick="javasript:formButtonPressed(${formId},${buttonData[3]})"
          class="btn btn-primary"
          id="button3${formId}"
          >
          ${buttonLabel[3]}
          </button>
        </article>
      `);
    }
  }
}

function formButtonPressed(formId, buttonData) {}
