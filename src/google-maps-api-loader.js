'use strict';

var Promise = require('es6-promise').Promise;

var hasLoaded = false;

function loadAutoCompleteAPI() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?libraries=places&callback=googleMapsAutoCompleteAPILoad';
    script.type = 'text/javascript';
    document.querySelector('head').appendChild(script);
}

exports.load = function() {
    var windowRef = window ? window : {};

    if (hasLoaded && windowRef.google) {
        return Promise.resolve(windowRef.google);
    }
    else if (!hasLoaded) {
        var deferred = function(resolve, reject) {
            hasLoaded = true;
            loadAutoCompleteAPI();

            windowRef.googleMapsAutoCompleteAPILoad = function() {
                resolve(windowRef.google);
            };

            setTimeout(function() {
                if (!windowRef.google) {
                    reject(new Error('Loading took too long'));
                }
            }, 5000);
        };

        return new Promise(deferred);
    }
};

