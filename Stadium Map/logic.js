// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map", {
  center: [39.8283, -98.5795],
  zoom: 13
});


// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 5,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);


// Create a new marker
// Pass in some initial options, and then add it to the map using the addTo method
var marker = L.marker([33.80029
  , -117.882685], {
  draggable: false,
  title: "Angel Stadium of Anaheim - Anaheim Angels"
}).addTo(myMap);

var marker = L.marker([33.89127,-84.4681], {
  draggable: false,
  title: "SunTrust Park - Atlanta Braves"
}).addTo(myMap);

var marker = L.marker([39.283944,-76.621572
], {
  draggable: false,
  title: "Oriole Park at Camden Yards - Baltimore Orioles"
}).addTo(myMap);

var marker = L.marker([42.346561, -71.097337
], {
  draggable: false,
  title: "Fenway Park - Boston Red Sox"
}).addTo(myMap);

var marker = L.marker([41.948314, -87.655397
], {
  draggable: false,
  title: "Wrigley Field - Chicago Cubs"
}).addTo(myMap);

var marker = L.marker([41.829892, -87.633703
], {
  draggable: false,
  title: "Guarantee Rate Park - Chicago White Sox"
}).addTo(myMap);

var marker = L.marker([39.097213, -84.506483
], {
  draggable: false,
  title: "Great American Ballpark - Cincinnati Reds"
}).addTo(myMap);

var marker = L.marker([41.496005, -81.685326
], {
  draggable: false,
  title: "Progressive Field - Cleveland Indians"
}).addTo(myMap);

var marker = L.marker([39.756175,-104.99413
], {
  draggable: false,
  title: "Coors Field - Colorado Rockies"
}).addTo(myMap);

var marker = L.marker([42.339063,-83.048627
], {
  draggable: false,
  title: "Comerica Park - Detroit Tigers"
}).addTo(myMap);

var marker = L.marker([29.757041, -95.355429
], {
  draggable: false,
  title: "Minute Maid Park - Houston Astros"
}).addTo(myMap);

var marker = L.marker([39.05160, -94.480149
], {
  draggable: false,
  title: "Kauffman Stadium - Kansas City Royals "
}).addTo(myMap);

var marker = L.marker([51.5365,-0.0098
], {
  draggable: false,
  title: "Olympic Stadium MLB London Series- "
}).addTo(myMap);

var marker = L.marker([34.073878, -118.239951
], {
  draggable: false,
  title: "Dodger Stadium"
}).addTo(myMap);

var marker = L.marker([25.778165, -80.219541
], {
  draggable: false,
  title: "Miami Marlins Park"
}).addTo(myMap);

var marker = L.marker([43.028232, -87.970966
], {
  draggable: false,
  title: "Miller Park- Milwaukee Brewers"
}).addTo(myMap);

var marker = L.marker([44.981749, -93.278026
], {
  draggable: false,
  title: "Target Field - Minnesota Twins"
}).addTo(myMap);

var marker = L.marker([40.757134, -73.84584
], {
  draggable: false,
  title: "Citi Field - New York Mets"
}).addTo(myMap);

var marker = L.marker([40.829586, -73.926413
], {
  draggable: false,
  title: "Yankee Stadium - New York Yankees"
}).addTo(myMap);

var marker = L.marker([37.751619, -122.200451
], {
  draggable: false,
  title: "Oakland-Alameda County Coliseum - Oakland A's"
}).addTo(myMap);

var marker = L.marker([39.906109, -75.166485
], {
  draggable: false,
  title: "Citizens Bank Park - Philidelphia Phillies"
}).addTo(myMap);

var marker = L.marker([33.44542,	-112.066793
], {
  draggable: false,
  title: "Chase Field - Arizona Diamondbacks"
}).addTo(myMap);

var marker = L.marker([40.44684, -80.005683
], {
  draggable: false,
  title: "PNC Park - Pittsburgh Pirates"
}).addTo(myMap);

var marker = L.marker([32.70753,	-117.157056
], {
  draggable: false,
  title: "Petco Park - San Diego Padres"
}).addTo(myMap);

var marker = L.marker([47.591443,	-122.332283
], {
  draggable: false,
  title: "T-Mobile Park - Seattle Mariners"
}).addTo(myMap);

var marker = L.marker([37.778324, -122.389221
], {
  draggable: false,
  title: "Oracle Park - San Francisco Giants"
}).addTo(myMap);

var marker = L.marker([38.622622, -90.192841
], {
  draggable: false,
  title: "Busch Stadium - St. Louis Cardinals"
}).addTo(myMap);

var marker = L.marker([27.768254, -82.653431
], {
  draggable: false,
  title: "Tropicana Field - Tampa Bay Rays"
}).addTo(myMap);

var marker = L.marker([43.641256, -79.389054
], {
  draggable: false,
  title: "Rogers Centre - Toronto Blue Jays"
}).addTo(myMap);

var marker = L.marker([32.7510, -97.0830
], {
  draggable: false,
  title: "Globe Life Park - Texas Rangers"
}).addTo(myMap);

var marker = L.marker([38.872987, -77.007435
], {
  draggable: false,
  title: "Nationals Park - Washington Nationals"
}).addTo(myMap);