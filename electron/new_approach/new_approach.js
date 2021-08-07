

// raw_video_data = download_video_data(options, video_link)
// raw_channel_data = download_channel_data(options, channel_id)
// full_data = transform_data(raw_video_data, raw_channel_data)
// write_data_to_excel(full_data, name of file?)

// imports
const $ = require("jquery");


// global variables
var dataset

// preloading

function loadAtStart() {
    // generate the form from the questionsInputData.js

}

// user interface functions

async function goButtonPressed() {

    // download and sort the data
    var videoLink = $("#videoLinkInput").val();
    dataset = new VideoDataset(videoLink, apiKey)
    let rawData = await dataset.downloadData()
    let sortedData = dataset.transformData(await rawData)
    console.log(sortedData)
    
    // interface
    // show loading screen
    // when sortedData is there, get show the main input screen
    
}


  