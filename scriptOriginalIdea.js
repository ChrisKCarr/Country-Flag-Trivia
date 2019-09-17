// mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNrY2FyciIsImEiOiJjazBtemZ2eWIwMmFwM3JvN3VmeGF0bW0xIn0.v3IKMVaeVC0dhfyYV_QAPQ';

// var map = new mapboxgl.Map({
//     container: 'map', // container id
//     style: 'mapbox://styles/chriskcarr/ck0nvo43p0xmc1co2xqenoww0', // stylesheet location
//     center: [0, 30], // starting position [lng, lat]
//     zoom: 1 // starting zoom
// });

// map.on('load', function() { //On map load, we want to do some stuff
//     map.addLayer({ //here we are adding a layer containing the tileset we just uploaded
//       'id': 'countries',//this is the name of our layer, which we will need later
//       'source': {
//         'type': 'vector',
//         'url': 'mapbox://chriskcarr.28hp2hxr' // <--- Add the Map ID you copied here
//       },
//       'source-layer': 'ne_10m_admin_0_countries-82hr4u', // <--- Add the source layer name you copied here
//       'type': 'fill',
//       'paint': {
//         'fill-color': '#52489C', //this is the color you want your tileset to have (I used a nice purple color)
//         'fill-outline-color': '#F2F2F2' //this helps us distinguish individual countries a bit better by giving them an outline
//       }
//     });

// /* Make an array of countries by Country code - according to the A3 labels - (find lat.long of each country and store in object)
// -map.on click even will comoare users lat/long click location vs the lat/lon of the country from within which the click occuered. -
// -the distance between the lat/longs will be substracted - and stored in a new variable "distanceOffBy"
// (OR - the scores will be based smallest to greatest - the score being the sitanceOffBy number - the goal being to have the lowest scoring number)
// -distanceOffBy will be used in an if/else statement, += a higher number the smaller the distanceOffBy number is.
// -The scoresSum after being incremented by the proper amount, will */
// console.log(map.source_layer);
// const countries = [];
// map.setFilter('countries', ['in', 'ADM0_A3_IS'].concat(['USA', 'BRA', 'POL'])); // This line lets us filter by country codes.
//     map.on('click', 'countries', function (mapElement) {
//     const countryCode = mapElement.features[0].properties.ADM0_A3_IS; // Grab the country code from the map properties.
  
//     fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`) // Using tempalate tags to create the API request
//       .then((data) => data.json()) //fetch returns an object with a .json() method, which returns a promise
//       .then((country) => { //country contains the data from the API request
//         // Let's build our HTML in a template tag
//         const html = ` 
//           <img src='${country.flag}' /> 
//           <ul>
//             <li><h3>${country.name}</h3></li>
//             <li><strong>Currencies:</strong> ${country.currencies.map((c) => c.code).join(', ')}</li>
//             <li><strong>Capital:</strong> ${country.capital}</li>
//             <li><strong>Population:</strong> ${country.population}</li>
//             <li><strong>Demonym:</strong> ${country.demonym}</li>
//           </ul>
//         `; // Now we have a good looking popup HTML segment.
//         new mapboxgl.Popup() //Create a new popup
//         .setLngLat(mapElement.lngLat) // Set where we want it to appear (where we clicked)
//         .setHTML(html) // Add the HTML we just made to the popup
//         .addTo(map); // Add the popup to the map
//       });
//     });
// });