
# Google Maps API Loader


[![npm](https://img.shields.io/npm/v/google-maps-api-loader.svg)](http://npm.im/google-maps-api-loader)

Provides a convenient wrapper for the Google Maps API, allowing it to be called in the promise syntax.

```

    var GoogleMapsApiLoader = require('google-maps-api-loader');

    GoogleMapsApiLoader({
            libraries: ['places'],
            apiKey: 'your-api-key' // optional
        })
        .then(function(googleApi) {
            var autocomplete = new googleApi.maps.places.AutocompleteService();
        }, function(err) {
            console.error(err);
        });

```

