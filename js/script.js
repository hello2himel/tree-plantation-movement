document.addEventListener("DOMContentLoaded", function() {
    // Initialize the map on the "map" div with a given center and zoom
    var map = L.map('map', {
        center: [23.6850, 90.3563], // Center coordinates of Bangladesh
        zoom: 7, // Zoom level for Bangladesh
        scrollWheelZoom: false // Disable zooming using scroll wheel
    });

    // Limit the map view to Bangladesh using LatLngBounds
    var bounds = L.latLngBounds(L.latLng(20.0, 88.0), L.latLng(27.0, 93.0)); // Define bounds for Bangladesh
    map.setMaxBounds(bounds); // Set maximum bounds for the map view
    map.on('drag', function() {
        map.panInsideBounds(bounds, { animate: false });
    });

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add a circle to represent Bogura District (for demonstration)
    var boguraCoordinates = [24.84809909325437, 89.37292977428324];
    var circle = L.circle(boguraCoordinates, {
        color: 'green',
        fillColor: 'green',
        fillOpacity: 0.5,
        radius: 20000 // Radius of 20 kilometers
    }).addTo(map);
    circle.bindPopup("This is Bogura District.");

    // Optionally, you can add more markers, polygons, or layers to the map as needed
});
