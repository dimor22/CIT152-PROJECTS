/*
 *	Chapter 6 tasks.js
 *	Author: David Lopez
 */
 
 var tasks = [];
 
 function addTask(){
	 'use strict';
	 var task = document.getElementById('task');
	 var output = document.getElementById('output');
	 
	 var message = '';
	 
	 if (task.value){
		 tasks[tasks.length] = task.value;
		 message = 'You have ' + tasks.length + ' task(s) in your to-do list.';
		 if( output.textContent !== undefined) {
			 output.textContent = message;
		 } else {
			 output.innerText = message;
		 }
		 
	 } // End of task.value IF.
	 
	 
	 /**
	  *
	  *	Clear the field tasks after adding it to the list
	  *
	  * This is a Pursue point.
	  *
	  *
	  */
	 task.value = "";
	 
	 return false;
	 
 }
 
 function init(){
	 'use strict';
	 document.getElementById('tasksForm').onsubmit = addTask;
 }
 
 window.onload = init;