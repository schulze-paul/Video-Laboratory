
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

