function loadXML(){
  //based on https://www.w3schools.com/xml/dom_intro.asp
  //Here's a curl command to load an xml file in terminal:
  //curl "http://ochre.lib.uchicago.edu/ochre?uuid=e59a5d19-0ea8-49c4-a814-05c6674f0f0a" | xmllint --format - | less

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
      loadXMLresponse(this);
    }
  };
  xhttp.open("GET", "http://ochre.lib.uchicago.edu/ochre?uuid=e59a5d19-0ea8-49c4-a814-05c6674f0f0a", true);
  xhttp.send();
  console.log(`xhttp is ${xhttp}`);

  function loadXMLresponse(xml){
    var uuids = [];
    var xmlDoc = xml.responseXML;
    console.log(`xmlDoc is ${xmlDoc}`);
    var testVar = xmlDoc.getElementsByTagName("resource");
    console.log(`testVar is ${testVar}; ${testVar.length}`);
    for (var i=0; i < testVar.length; i++){
      uuids.push(testVar[i].getAttribute('uuid'));
    };
    console.log(`uuid list is ${uuids}`);
  }
}

function tabGallery(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Replace the preview thumbail with the full-resolution image on click
  expandImg.src = imgs.src.replace("&preview", "&image");
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}
