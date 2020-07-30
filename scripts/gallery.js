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

var connect = new XMLHttpRequest();
connect.open("GET", "http://ochre.lib.uchicago.edu/ochre?uuid=e59a5d19-0ea8-49c4-a814-05c6674f0f0a", false);
connect.setRequestHeader("content-type", "text/xml");
connect.send(null);
var sourceXML = connect.responseXML;
var images = sourceXML.getElementsByTagName("items");
for(var i = 0; i < images.children.length; i++){
    uuids.push(items[i].getAttribute("uuid"));
}



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

    tileSources: [
	{
	    type: 'image',
	    url: 'http://ochre.lib.uchicago.edu/ochre?uuid=be09010f-c16a-43c2-9632-e95c27e82d0d&image'
	},
	{
	    type: 'image',
	    url: 'http://ochre.lib.uchicago.edu/ochre?uuid=ae0e0070-e08a-40de-b74d-b1a1e4a355fc&image'
	}
    ]

});
