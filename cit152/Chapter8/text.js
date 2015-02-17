/*
 *	Chapter 4 Text.js
 *	Author: David Lopez
 */
 
 function limitText(){
	 'use strict';
	 var comments = U.$('comments');
	 var count = comments.value.length;
	 U.$('count').value = count;
	 
	 if(count > 100) {
		 comments.value = comments.value.slice(0,100);
	 }
 } // End of limitText() function.
 

 window.onload = function() {
	 'user strict';
	 U.addEvent(U.$('comments'), 'keyup', limitText);
	 U.addEvent(U.$('comments'), 'change', limitText);
 }