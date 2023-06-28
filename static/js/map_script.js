let myMap; // Declare myMap variable globally
let houses;

function createMap(houses) {
  let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  let baseMaps = {
    "Street Map": streetmap
  };

  let overlayMaps = {
    "Houses": houses
  };

  myMap = L.map("map", {
    center: [30.266666, -97.733330],
    zoom: 10,
    layers: [streetmap, houses]
  });

  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}

function marker(response) {
  console.log(response); // Debugging: Log the response object

  let markers = L.markerClusterGroup(); // Create a marker cluster group

  // Loop through the data array
  for (let index = 0; index < response.length; index++) {
    let obj = response[index];

    // Create a marker for each data point and bind a popup
    let marker = L.marker([obj.latitude, obj.longitude])
      .bindPopup(`<h3>City: ${obj.city}</h3><hr><p>Address: ${obj.streetaddress}</p><hr><p>Zipcode: ${obj.zipcode}</p><hr><p>Price: ${obj.latestprice}</p>`);

    // Add the marker to the marker cluster group
    markers.addLayer(marker);
  }

  // Pass the marker cluster group to the createMap function
  createMap(markers);
}

d3.json("http://127.0.0.1:5000/api/v1.0/austin_2021_home_sales")
  .then(marker);
