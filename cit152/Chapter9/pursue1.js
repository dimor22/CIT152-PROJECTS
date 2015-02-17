/**
 * Created by david lopez on 2/16/15.
 * Chapter 9 Pursue 1
 */


window.onload = function() {
    'use strict';

    U.$('name').textContent = window.navigator.appName;
    U.$('language').textContent = window.navigator.language;
    U.$('platform').textContent = window.navigator.platform;
    U.$('cookies').textContent = window.navigator.cookieEnabled;
    U.$('width').textContent = window.innerWidth + 'px';
    U.$('height').textContent = window.innerHeight + 'px';


};