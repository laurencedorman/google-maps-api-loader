
# Google Maps API Loader

Provides a convenient wrapper for the Google Maps API, allowing it to be called in the promise syntax.

```

    var GoogleMapsApiLoader = require('google-maps-api-loader');

    GoogleMapsApiLoader.load()
        .then(function(googleApi) {
            var autocomplete = new googleApi.maps.places.AutocompleteService();
        }, function(err) {
            console.error(err);
        });

```

