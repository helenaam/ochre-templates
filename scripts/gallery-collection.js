// Replace this URL with the URL for your first image hierarchy or set
var url1 = "http://ochre.lib.uchicago.edu/ochre?uuid=cc6a3b57-23de-f359-eed7-76a7c931b480";
// Replace this URL with the URL for your second image hierarchy or set
var url2 = "http://ochre.lib.uchicago.edu/ochre?uuid=e59a5d19-0ea8-49c4-a814-05c6674f0f0a";
// Replace this URL with the URL for your third image hierarchy or set
var url3 = "http://ochre.lib.uchicago.edu/ochre?uuid=4274aec7-b797-4585-9235-81857897cc47";
// Replace this URL with the URL for your fourth image hierarchy or set
var url4 = "http://ochre.lib.uchicago.edu/ochre?uuid=2fcd4cfe-8612-42c0-8ccd-ff9fa4ef351e";

var uuids = [];
var tiles = [];
var viewer;

function loadXML(link){
    var connect = new XMLHttpRequest();
    connect.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200){
	    loadUUIDs(this.responseXML);
	    showImages(uuids);
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
    tiles = prepareArray(uuids);

    viewer = OpenSeadragon({
	id: "seadragon-viewer",
	prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
	collectionMode: true,
	collectionRows: 3,
	collectionTileSize: 1024,
	collectionTileMargin: 256,
	collectionLayout: 'vertical',
	// placeholderFillStyle: "#a67e58",
	showZoomControl: true,
	showHomeControl: true,
	showFullPageControl: true,
	tileSources: tiles
    });
}

var galLink1 = document.getElementById("link1");
var galLink2 = document.getElementById("link2");
var galLink3 = document.getElementById("link3");
var galLink4 = document.getElementById("link4");
// Copy and paste the lines above to add more gallery links
galLink1.onclick = function() {
    tiles = [];
    uuids = [];
    if(viewer){
	viewer.destroy();
    }
    loadXML(url1);
    return false;
}
galLink2.onclick = function() {
    tiles = [];
    uuids = [];
    if(viewer){
	viewer.destroy();
    }
    loadXML(url2);
    return false;
}
galLink3.onclick = function() {
    tiles = [];
    uuids = [];
    if(viewer){
	viewer.destroy();
    }
    loadXML(url3);
    return false;
}
// Copy and paste the function below to add more gallery links
galLink4.onclick = function() {
    tiles = [];
    uuids = [];
    if(viewer){
	viewer.destroy();
    }
    loadXML(url4);
    return false;
}

