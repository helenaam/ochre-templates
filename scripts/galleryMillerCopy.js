function loadXML(){
    // Replace the URL below with the URL for your image hierarchy
    var url = "http://ochre.lib.uchicago.edu/ochre?uuid=e59a5d19-0ea8-49c4-a814-05c6674f0f0a";
    //Make the API call
    var connect = new XMLHttpRequest();
    connect.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            loadUUIDs(this.responseXML);
        }
    };
    connect.open("GET", url, true);
    connect.send();
}

//Load the resource uuids into an array
function loadUUIDs(sourceXML) {
    var uuids = [];
    var images = sourceXML.getElementsByTagName("resource");
    for (var i = 0; i < images.length; i++) {
        var uuid = images[i].getAttribute('uuid');
        uuids.push(uuid);
    };
    console.log(uuids);
    var uuidArray = uuids;
    return uuidArray;
}

function prepareArray(uuidArray) {
    var tileSources = [];
    console.log("helloWorld"+uuidArray.length);
    for (var i = 0; i < uuidArray.length; i++){
        console.log("hi"+i);
        tileSources.push({
            type: 'image',
            url: 'http://ochre.lib.uchicago.edu/ochre?uuid=' + uuidArray[i] + '&image'
        });
    };
    return tileSources;
}

//alert(); For some reason, it only works when I include this line
var tileSources = prepareArray(uuidArray);

var viewer = OpenSeadragon({
    id: "seadragon-viewer",
    prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
    collectionMode: true,
    collectionRows: 1,
    collectionTileSize: 1024,
    collectionTileMargin: 256,
    tileSources: tileSources
});



//var viewer = OpenSeadragon({
//id: "seadragon-viewer",
//prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
//debugMode: false,
//showNavigator: 'TRUE',
//navigatorOpacity: 0.8,
//navigatorBackground: '#ffffff',
//navigatorBorderColor: '#e6e6e6',
//navigatorPosition: "TOP_RIGHT",
//navigatorSizeRatio: 0.2,

//collectionMode: true,
//collectionRows: 2,
//collectionTileSize: 1024,
//collectionTileMargin: 256,
//tileSources:{
//type: 'image',
//url: 'assets/image1.jpg',
//buildPyramid: false
//},

//});
