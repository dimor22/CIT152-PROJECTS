/*
 *	Chapter 5 Sphere.js
 *	Author: David Lopez
 */
 
function calculate() {
	'use strict';
	
	// For storing the volume:
	var volume;
    // Get a reference to the form value:
    var radius = document.getElementById('radius'); // 
	
	if(radius && (radius.value > 0)){
		
		volume = (4/3) * Math.PI * Math.pow(radius.value, 3);
    	volume = volume.toFixed(4);

	} else {
		
		volume = 'Please enter a valid radius!';
		
	} // End of IF.
	
	document.getElementById('volume').value = volume;
	

	// Return false to prevent submission:
	return false;
    
} // End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init() {
	'use strict';
	document.getElementById('sphereForm').onsubmit = calculate;
} // End of init() function.
window.onload = init;