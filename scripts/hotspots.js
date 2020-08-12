var url = "http://pi.lib.uchicago.edu/1001/org/ochre/46e358d4-9d38-4aa4-b54c-d11a78b4e35c&xsl=none";

var clickAreas;
var formatted = "";

var connect = new XMLHttpRequest();
connect.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
	clickAreas = this.responseXML.getElementsByTagName("area");
	formatHTML(clickAreas);
	document.getElementById('imageMap').innerHTML = formatted;
    }
};
connect.open("GET", url, true);
connect.send();

function formatHTML(areaList){
    for(var i = 0; i < areaList.length; i++){
	formatted = formatted + "\n<area shape=\"" + areaList[i].getAttribute('shape') + "\" coords=\"" + areaList[i].getAttribute('coords') + "\" href=\"http://pi.lib.uchicago.edu/1001/org/ochre/" + areaList[i].getAttribute('uuid') + "\">";
    }
}
