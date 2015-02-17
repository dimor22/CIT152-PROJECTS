/**
 *	Chapter 8 epoch.js
 *	Author: David Lopez
 */
 
 function updateDuration() {
	 'use strict';
	 var now = new Date();
	 var message = 'It has been ' + now.getTime();
	 message += ' seconds since the epoch. (mouseover to update)';
	 U.setText('output', message);
 }
 
 window.onload = function() {
	 'use strict';
	 U.addEvent(U.$('output'), 'mouseover', updateDuration);
	 
	 
	/**
	 *
	 * Pursue point 2.
	 * Update message by clicking a button
	 *
	 */
	 U.addEvent(U.$('update-btn'), 'click', updateDuration);
	 updateDuration();
 }