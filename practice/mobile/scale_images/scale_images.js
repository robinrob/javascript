#!/usr/bin/env node

function processImages(){

  var pixelRatio = window.devicePixelRatio;
  if(window.devicePixelRatio > 1) {
    var matches = document.querySelectorAll("img.highRes");
    for(var i = 0; i < matches.length; i++) {
      
      matches[i].width = (matches[i].width / pixelRatio);
    
    }
}

addEventListener('deviceready', onDeviceReady);

function onDeviceReady(evt){
	
	console.log("Processing images ...")
  processImages();
  console.log("Images processed.")

}