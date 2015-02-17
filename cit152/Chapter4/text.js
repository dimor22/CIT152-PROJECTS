/*
 *	Chapter 4 Text.js
 *	Author: David Lopez
 */
 
 function limitText(){
	 'use strict';
	 var limitedText;
	 var originalText = document.getElementById('comments').value;
	 var lastSpace = originalText.lastIndexOf(' ',100);
	 limitedText = originalText.slice(0, lastSpace);
	 
	 document.getElementById('count').value = originalText.length;
	 
	 document.getElementById('result').value = limitedText;
	 
	 return false;
 } // End of limitText() function.
 
 function init(){
	 'use strict';
	 document.getElementById('calcForm').onsubmit = limitText;
 } // End of init() function.
 
 window.onload = init;