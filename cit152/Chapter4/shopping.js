/*
 *	Chapter 4 Shopping.js
 *	Author: David Lopez
 */
 
function calculate(){
	'use strict';
	
	var total;
	var queantity = document.getElementById('quantity').value;
	var price = document.getElementById('price').value;
	var tax = document.getElementById('tax').value;
	var discount = document.getElementById('discount').value;
	
	total = queantity * price;
	tax /= 100;
	tax++;
	total *= tax;

	total -= discount;
	


	total = total.toFixed(2);

	document.getElementById('total').value = total;
	
	return false;
} // End of calculate() function.


function init(){
	'use strict';
	var shoppingForm = document.getElementById('shoppingForm');
	shoppingForm.onsubmit = calculate;
}

window.onload = init;