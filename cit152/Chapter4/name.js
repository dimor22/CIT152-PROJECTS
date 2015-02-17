/*
 *	Chapter 4 name.js
 *	Author: David Lopez
 */
 
 function formatNames(){
	 'use strict';
	 var formattedName;
	 var firstName = document.getElementById('firstName').value;
	 var lastName = document.getElementById('lastName').value;
	 
	 formattedName = lastName + ', ' + firstName;
	 
	 document.getElementById('result').value = formattedName;
	 
	 return false;
 } // End of formatNames() function.
 
 function init(){
	 'use strict';
	 document.getElementById('nameForm').onsubmit = formatNames;
 } // End of init() function.
 
 window.onload = init;