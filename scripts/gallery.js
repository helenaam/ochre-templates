// Replace this URL with the URL for your first image hierarchy or set
var url1 = "http://ochre.lib.uchicago.edu/ochre?uuid=e59a5d19-0ea8-49c4-a814-05c6674f0f0a";
// Replace this URL with the URL for your second image hierarchy or set
var url2 = "http://ochre.lib.uchicago.edu/ochre?uuid=e59a5d19-0ea8-49c4-a814-05c6674f0f0a";
// Replace this URL with the URL for your third image hierarchy or set
var url3 = "http://ochre.lib.uchicago.edu/ochre?uuid=e59a5d19-0ea8-49c4-a814-05c6674f0f0a";

var uuids = [];
//var tiles = [];

function loadXML(link){
    var connect = new XMLHttpRequest();
    connect.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200){
	    loadUUIDs(this.responseXML);
	}
    };
    connect.open("GET", link, true);
    connect.send();
}

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

function showImages(uuids){
    alert(); // For some reason, it only works when I include this line
    var tiles = prepareArray(uuids);

    var viewer = OpenSeadragon({
	id: "seadragon-viewer",
	prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
	collectionMode: true,
	collectionRows: 1,
	collectionTileSize: 1024,
	collectionTileMargin: 256,
	showZoomControl: true,
	showHomeControl: true,
	showFullPageControl: true,
	tileSources: tiles
    });
}

var galLink1 = document.getElementById("link1");
galLink1.onclick = function() {
    loadXML(url1);
    showImages(uuids);
    return false;
}
var galLink2 = document.getElementById("link2");
galLink2.onclick = function() {
    loadXML(url2);
    showImages(uuids);
    return false;
}
var galLink3 = document.getElementById("link3");
galLink3.onclick = function() {
    loadXML(url3);
    showImages(uuids);
    return false;
}

