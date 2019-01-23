console.log('Welcome to Trip Planner');
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoicmNvbHVjY2kwOSIsImEiOiJjanI5b2Z3MGQwamtlNDRwY245ZW9rd3U4In0.pkSrGVT-gjMmH2r63nuT3A';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'
});