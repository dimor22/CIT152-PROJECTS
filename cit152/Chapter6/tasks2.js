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
		 tasks.push(task.value);
		 message = '<h2>To-Do</h2><ol>';
		 
		 for (var i = 0, count = tasks.length; i < count; i++){
			 message += '<li>' + tasks[i] + '</li>';
		 }
		 
		 message += '</ol>';
		 
		 output.innerHTML = message;
		 
	 } // End of task.value IF.
	 
	 
	 // Clear task field
	 task.value = "";
	 
	 return false;
	 
 }
 
 function init(){
	 'use strict';
	 document.getElementById('tasksForm').onsubmit = addTask;
 }
 
 window.onload = init;