#!/usr/bin/env node

/* Example of a function that re-defines itself according to the browser
environment that the code is running in. By using an inner 'initialiser'
function to check which browser the code is running in - the browser
check only needs to be done once.
*/

var work = function() {
	// var browser = 'firefox'
	var browser = 'chrome'
	
  function adaptToBrowser(){
    if (browser === 'firefox') {
    	return firefoxWork
    }
		else if (browser === 'chrome') {
			return chromeWork
		}
  }
	
  function firefoxWork() {
    console.log("I'm running in Firefox!");
  }
	
  function chromeWork() {
    console.log("I'm running in Chrome!");
  }
  return adaptToBrowser()
}();

work()