// Replace the URL below with the URL for your image hierarchy
var url = "http://ochre.lib.uchicago.edu/ochre?uuid=e59a5d19-0ea8-49c4-a814-05c6674f0f0a";

function loadUUIDs(sourceXML){
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
    return tileSources;
}

var uuids = [];
var connect = new XMLHttpRequest();
connect.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
	loadUUIDs(this.responseXML);
    }
};
connect.open("GET", url, true);
connect.send();

alert(); // For some reason, it only works when I include this line
var tileSources = prepareArray(uuids);

var viewer = OpenSeadragon({
    id: "seadragon-viewer",
    prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
    collectionMode: true,
    collectionRows: 1,
    collectionTileSize: 1024,
    collectionTileMargin: 256,
    tileSources: tileSources
});
