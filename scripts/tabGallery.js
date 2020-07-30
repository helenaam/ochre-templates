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

  function loadXMLresponse(xml){
    var xmlDoc = xml.responseXML;
    var testVar = xmlDoc.getElementsByTagName("resource");
    for (var i=0; i < testVar.length; i++){
      var iter = i;
      var uuid = testVar[i].getAttribute('uuid');
      //create a new column div for each image (this will need to be tweaked to handle many images.)
      var newDiv = document.createElement("div");
      newDiv.setAttribute('class', 'column');
      newDiv.setAttribute('id', 'imgDiv'+iter);
      document.getElementById("previewGallery").appendChild(newDiv);
      //create a new img element inside each div
      var newImg = document.createElement("img");
      newImg.setAttribute('src', 'http://pi.lib.uchicago.edu/1001/org/ochre/'+uuid+'&preview');
      newImg.setAttribute('style', 'width: 50%');
      newImg.setAttribute('onclick', 'tabGallery(this)');
      document.getElementById('imgDiv'+iter).appendChild(newImg);
    };
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
