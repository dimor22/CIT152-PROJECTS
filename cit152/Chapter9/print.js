/**
 * Created by david lopez on 2/13/15.
 * Chapter 9 Print
 */

window.onload = function() {
    'use strict';

    if (typeof window.print == 'function') {

        var printButton = document.createElement('button');

        if (printButton.textContent != 'undefined') {
            printButton.textContent = 'Print';
        } else {
            printButton.innerText = 'Print';
        }

        printButton.onclick = function() {
            window.print();
        };

        document.body.insertBefore(printButton, document.getElementById('main'));

    }
};