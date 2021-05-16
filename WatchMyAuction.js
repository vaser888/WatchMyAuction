

var historyData = new Array(3);
window.addEventListener("storage", function (event) {
    //console.log(event);
    var adesa_data = JSON.parse(event.newValue);
    //console.log(adesa_data);
    var sortedData = threeHistoryArray(adesa_data, adesa_data.length);
    displaySortedData(sortedData);
}, false);


function makecolumn() {
    let lanenumber = document.getElementById("laneOption");
    let location = document.getElementById("locationOption");
}

var currentAmountOfArrays = 0;
var sortedArray = [];
function threeHistoryArray(recivedData, recivedArrayLength) {
    if (currentAmountOfArrays != recivedArrayLength) {
        refreshDivData();
        for (i = 0; i <= recivedArrayLength - 1; i++) {
            sortedArray[i] = new Array(3);
            GenerateDivForSortedData(recivedData[i][0]);
        }
        currentAmountOfArrays = recivedArrayLength;
    }
    for (i = 0; i <= sortedArray.length - 1; i++) {
        sortedArray[i].shift();
        var y = recivedData[i] + "\r\n";
        sortedArray[i].push(y);
    }
    return sortedArray;
}

function refreshDivData() {
    var main = document.getElementById("dataDump");
    main.remove();
    var divArea = document.createElement("div");
    divArea.setAttribute("id", "dataDump");
    divArea.setAttribute("style", "display:flex; white-space: pre; justify-content: space-evenly;")
    document.getElementById("main").appendChild(divArea);
}

function GenerateDivForSortedData(attributeData) {
    var mainDiv = document.getElementById("dataDump");
    var divArea = document.createElement("div");
    divArea.setAttribute("class", "output");
    divArea.setAttribute("div-data", attributeData);
    mainDiv.appendChild(divArea);
}

function displaySortedData(sData) {
    for (i = 0; i <= currentAmountOfArrays - 1; i++) {
        var d = document.getElementsByClassName("output");
        d[i].textContent = sData[i];

        //console.log(d, sData[0]);
    }
}
