var url = "http://pi.lib.uchicago.edu/1001/org/ochre/46e358d4-9d38-4aa4-b54c-d11a78b4e35c&xsl=none";

var clickAreas;
var formatted = "";

var connect = new XMLHttpRequest();
connect.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
	//formatted = "";
	clickAreas = this.responseXML.getElementsByTagName("area");
	formatHTML_div(clickAreas);
	// formatHTML_page(clickAreas);
	document.getElementById('imageMap').innerHTML = formatted;
    }
};
connect.open("GET", url, true);
connect.send();

// Use this function if you want to visit the resulting page rather than having it load in a div
function formatHTML_page(areaList){
    //formatted = "";
    for(var i = 0; i < areaList.length; i++){
	formatted = formatted + "\n<area shape=\"" + areaList[i].getAttribute('shape') + "\" coords=\"" + areaList[i].getAttribute('coords') + "\" href=\"http://pi.lib.uchicago.edu/1001/org/ochre/" + areaList[i].getAttribute('uuid') + "\">";
    }
}

// Use this function if you want the resulting page to load in a div that can be viewed alongside the image
function formatHTML_div(areaList){
    //formatted = "";
    for(var i = 0; i < areaList.length; i++){
	formatted = formatted + "\n<area shape=\"" + areaList[i].getAttribute('shape') + "\" coords=\"" + areaList[i].getAttribute('coords') + "\" onclick=\"loadResults(\'" + areaList[i].getAttribute('uuid') + "\')\">";
    }
}

function loadResults(uuid){
    // alert("called loadResults");
    var link = "http://pi.lib.uchicago.edu/1001/org/ochre/" + uuid;
    // document.getElementById("results-page").innerHTML = '<object type="text/html" data="' + link + '"></object>';
    document.getElementById("results-page").innerHTML = '<iframe src="' + link + '" height="100%"></iframe>';
}
