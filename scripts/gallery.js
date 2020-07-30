// code to read XML file and get UUIDs

// This is a string; maybe it needs to be some kind of "File" type instead, so that sourceXML represents the content rather than the filename?

// var sourceXML = "http://ochre.lib.uchicago.edu/ochre?uuid=e59a5d19-0ea8-49c4-a814-05c6674f0f0a";

// const fs = require('fs');
// fs.readFile("http://ochre.lib.uchicago.edu/ochre?uuid=e59a5d19-0ea8-49c4-a814-05c6674f0f0a", 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

// This code is not storing anything into the variable sourceXML.  Maybe the readFile function only works for Node.js rather than in a web browser?  It does not work when I input a local file instead of the OCHRE link either.

// var sourceXML = "";
// function readFile() {
//     jQuery.get("http://ochre.lib.uchicago.edu/ochre?uuid=e59a5d19-0ea8-49c4-a814-05c6674f0f0a", function(sourceXML) {
// 	console.log(sourceXML);
//     });
// }
// this is not working, no data is getting stored into sourceXML; I will come back to this later
// alert(sourceXML);

// var connect = new XMLHttpRequest();
// connect.open("GET", "http://ochre.lib.uchicago.edu/ochre?uuid=e59a5d19-0ea8-49c4-a814-05c6674f0f0a", false);
// connect.setRequestHeader("content-type", "text/xml");
// connect.send(null);
// var sourceXML = connect.responseXML;
// var images = sourceXML.getElementsByTagName("items");
// for(var i = 0; i < images.children.length; i++){
//     uuids.push(items[i].getAttribute("uuid"));
// }

var url = "http://ochre.lib.uchicago.edu/ochre?uuid=e59a5d19-0ea8-49c4-a814-05c6674f0f0a";
var uuids = [];

//function loadXML(link){
var connect = new XMLHttpRequest();
connect.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
	loadUUIDs(this.responseXML);
    }
};
connect.open("GET", url, true);
connect.send();
//}

function loadUUIDs(sourceXML){
    // var uuids = [];
    var images = sourceXML.getElementsByTagName("resource");
    for(var i = 0; i < images.length; i++){
	var uuid = images[i].getAttribute('uuid');
	uuids.push(uuid);
    };
    return uuids;
}

function prepareArray(uuids){
    var tileSources = [];
    for(var i = 0; i < uuids.length; i++){
	tileSources.push(
	    {
		type: 'image',
		url: 'http://ochre.lib.uchicago.edu/ochre?uuid=' + uuids[i] + '&image'
	    }
	);
    }
    // alert(tileSources);
    return tileSources;
}

alert(uuids); // For some reason, it only works when I include this line
var tileSources = prepareArray(uuids);

// I defined the url variable at the top of the file so that it is easier to find.  The rest of the code will go down here.

// if(window.DOMParser){
//     // code for modern browsers
//     parser = new DOMParser();
// }

// Commented out the below part temporarily because it was throwing an error

// var parser = new DOMParser();
// var xml = parser.parseFromString(sourceXML, "text/xml");

// code to display images

var viewer = OpenSeadragon({
    id: "seadragon-viewer",
    prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
    collectionMode: true,
    collectionRows: 1,
    collectionTileSize: 1024,
    collectionTileMargin: 256,
    
    // Code for one image:
    
    // tileSources: {
    // 	type: 'image',
    // 	url: 'http://ochre.lib.uchicago.edu/ochre?uuid=be09010f-c16a-43c2-9632-e95c27e82d0d&image'
    // 	// buildPyramid: false
    // }

    tileSources: tileSources

    // [
    // 	{
    // 	    type: 'image',
    // 	    url: 'http://ochre.lib.uchicago.edu/ochre?uuid=' + uuids[0] + '&image'
    // 	},
    // 	{
    // 	    type: 'image',
    // 	    url: 'http://ochre.lib.uchicago.edu/ochre/uuid=' + uuids[1] + '&image'
    // 	}
    // ]
    
    // [
    // 	{
    // 	    type: 'image',
    // 	    url: 'http://ochre.lib.uchicago.edu/ochre?uuid=be09010f-c16a-43c2-9632-e95c27e82d0d&image'
    // 	},
    // 	{
    // 	    type: 'image',
    // 	    url: 'http://ochre.lib.uchicago.edu/ochre?uuid=ae0e0070-e08a-40de-b74d-b1a1e4a355fc&image'
    // 	}
    // ]

});
