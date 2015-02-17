/*
 *	Chapter 7 today.js
 *	Author: David Lopez
 */
 
 function setText(elementId, message) {
    'use strict';
    
    if ( (typeof elementId == 'string')
    && (typeof message == 'string') ) {
    
        // Get a reference to the paragraph:
        var output = document.getElementById(elementId);
    
        // Update the innerText or textContent property of the paragraph:
		if (output.textContent !== undefined) {
			output.textContent = message;
		} else {
			output.innerText = message;
		}
    
    } // End of main IF.

} // End of setText() function.

 function init(){
	 'use strict';
	 var today = new Date();
	 var message = 'Right now it is ' + today.toLocaleDateString();
	 message += ' at ' + today.getHours() + ':' + today.getMinutes();
	 
	// Update the page:
    setText('output', message);
	 
 }
 
 window.onload = init;