'use strict';

var Promise = require('es6-promise').Promise;
var urlBuilder = require('../lib/url-builder.js');

var googleApi;

function loadAutoCompleteAPI(params) {
    var script = document.createElement('script');

    script.type = 'text/javascript';

    script.src = urlBuilder({
        base: 'https://maps.googleapis.com/maps/api/js',
        libraries: params.libraries || [],
        callback: 'googleMapsAutoCompleteAPILoad',
        apiKey: params.apiKey
    });

    document.querySelector('head').appendChild(script);
}

/**
 * googleMapsApiLoader
 *
 * @param  params           {Object}
 * @param  params.libraries {Array}
 *
 * @return {Promise}
 */
function googleMapsApiLoader(params) {
    if (googleApi) {
        return Promise.resolve(googleApi);
    }

    var windowRef = window ? window : {};

    var deferred = function(resolve, reject) {
        loadAutoCompleteAPI(params);

        windowRef.googleMapsAutoCompleteAPILoad = function() {
            googleApi = windowRef.google;
            resolve(googleApi);
        };

        setTimeout(function() {
            if (!windowRef.google) {
                reject(new Error('Loading took too long'));
            }
        }, 5000);
    };

    return new Promise(deferred);
}

module.exports = googleMapsApiLoader;

