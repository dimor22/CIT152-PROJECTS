/**
 * Created by davidlopez on 2/15/15.
 * Chapter 9 Cookies.
 */

var COOKIE = {

    // Function for setting a cookie:
    setCookie: function(name, value, expire) {
        'use strict';


        var str =  encodeURIComponent(name) + '=' + encodeURIComponent(value);

        str += ';expires=' + expire.toGMTString();

        document.cookie = str;

        console.log(document.cookie);

    }, // End of setCookie() function.

    // Function for retrieving a cookie value:
    getCookie: function(name) {
        'use strict';

        var len = name.length;

        var cookies = document.cookie.split(';');

        for (var i = 0, count = cookies.length; i < count; i++) {

            var value = (cookies[i].slice(0,1) == ' ') ? cookies[i].slice(1) : cookies[i];

            value = decodeURIComponent(value);

            if (value.slice(0,len) == name) {

                return value.split('=')[1];

            } // End of IF.

        } // End of FOR loop.

        return false;

    }, // End of getCookie() function.

    deleteCookie: function(name) {
        'use strict';
        document.cookie = encodeURIComponent(name) + '=;expires=Thu, 01-Jan-1970 00:00:01 GMT';
    } // End of deleteCookie() function.

};