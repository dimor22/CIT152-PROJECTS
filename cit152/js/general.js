/*
 *	General Functions Library
 *	Author: David Lopez
 */
 
 
// Returns date of last time file was modified
function lastModifiedDate() {
    var x = document.lastModified;
    document.getElementById("last-modified").innerHTML = x;
}

lastModifiedDate();
