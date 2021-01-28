function markerSize(wins) {
  return wins * 20;
}
function markerSizews(ws) {
  return ws * 10000;
}
function markerSizesalary(salary) {
  return salary / 1000;
}



// Teams with total wins and world series wins
var locations = [
  {
    coordinates: [33.80029, -117.882685],
    title: "Angel Stadium of Anaheim - Anaheim Angels",
    total: {
      name: "Anaheim Angels",
      wins: 4735
    },
    Worldseries: {
      name: "Anaheim Angels",
      wins: 1
    },
    totalsalary: {
      name: "Anaheim Angels",
      salary: 173717599
    }

  },
  {
    coordinates: [33.89127, -84.4681],
    title: "SunTrust Park - Atlanta Braves",
    total: {
      name: "Atlanta Braves",
      wins: 10722
    },
    Worldseries: {
      name: "Atlanta Braves",
      wins: 1
    },
    totalsalary: {
      name: "Atlanta Braves",
      salary: 130849395
    }
  },
  {
    coordinates: [39.283944, -76.621572],
    title: "Oriole Park at Camden Yards - Baltimore Orioles",
    total: {
      name: "Baltimore Orioles",
      wins: 8793
    },
    Worldseries: {
      name: "Baltimore Orioles",
      wins: 3
    },
    totalsalary: {
      name: "Baltimore Orioles",
      salary: 130413607
    }
  },
  {
    coordinates: [42.346561, -71.097337],
    title: "Fenway Park - Boston Red Sox",
    total: {
      name: "Boston Red Sox",
      wins: 9626
    },
    Worldseries: {
      name: "Boston Red Sox",
      wins: 9
    },
    totalsalary: {
      name: "Boston Red Sox",
      salary: 227398860
    }
  },
  {
    coordinates: [41.948314, -87.655397],
    title: "Wrigley Field - Chicago Cubs",
    total: {
      name: "Chicago Cubs",
      wins: 11016
    },
    Worldseries: {
      name: "Chicago Cubs",
      wins: 3
    },
    totalsalary: {
      name: "Chicago Cubs",
      salary: 194259933
    }
  },
  {
    coordinates: [41.829892, -87.633703],
    title: "Guarantee Rate Park - Chicago White Sox",
    total: {
      name: "Chicago White Sox",
      wins: 9318
    },
    Worldseries: {
      name: "Chicago White Sox",
      wins: 3
    },
    totalsalary: {
      name: "Chicago White Sox",
      salary: 71839808
    }
  },
  {
    coordinates: [39.097213, -84.506483],
    title: "Great American Ballpark - Cincinnati Reds",
    total: {
      name: "Cincinnati Reds",
      wins: 10630
    },
    Worldseries: {
      name: "Cincinnati Reds",
      wins: 5
    },
    totalsalary: {
      name: "Cincinnati Reds",
      salary: 100305768
    }
  },
  {
    coordinates: [41.496005, -81.685326],
    title: "Progressive Field - Cleveland Indians",
    total: {
      name: "Cleveland Indians",
      wins: 9512
    },
    Worldseries: {
      name: "Cleveland Indians",
      wins: 2
    },
    totalsalary: {
      name: "Cleveland Indians",
      salary: 143104703
    }
  },
  {
    coordinates: [39.756175, -104.99413],
    title: "Coors Field - Colorado Rockies",
    total: {
      name: "Colorado Rockies",
      wins: 2059
    },
    Worldseries: {
      name: "Colorado Rockies",
      wins: 0
    },
    totalsalary: {
      name: "Colorado Rockies",
      salary: 143968544
    }
  },
  {
    coordinates: [42.339063, -83.048627],
    title: "Comerica Park - Detroit Tigers",
    total: {
      name: "Detroit Tigers",
      wins: 9346
    },
    Worldseries: {
      name: "Detroit Tigers",
      wins: 4
    },
    totalsalary: {
      name: "Detroit Tigers",
      salary: 130959889
    }
  },
  {
    coordinates: [29.757041, -95.355429],
    title: "Minute Maid Park - Houston Astros",
    total: {
      name: "Houston Astros",
      wins: 4630
    },
    Worldseries: {
      name: "Houston Astros",
      wins: 1
    },
    totalsalary: {
      name: "Houston Astros",
      salary: 163524216
    }
  },
  {
    coordinates: [39.05160, -94.480149],
    title: "Kauffman Stadium - Kansas City Royals ",
    total: {
      name: "Kansas City Royals",
      wins: 3927
    },
    Worldseries: {
      name: "Kansas City Royals",
      wins: 2
    },
    totalsalary: {
      name: "Kansas City Royals",
      salary: 129944821
    }
  },
  {
    coordinates: [34.073878, -118.239951],
    title: "Dodger Stadium",
    total: {
      name: "Los Angeles Dodgers",
      wins: 11017
    },
    Worldseries: {
      name: "Los Angeles Dodgers",
      wins: 7
    },
    totalsalary: {
      name: "Los Angeles Dodgers",
      salary: 199582045
    }
  },
  {
    coordinates: [25.778165, -80.219541],
    title: "Miami Marlins Park",
    total: {
      name: "Miami Marlins",
      wins: 2021
    },
    Worldseries: {
      name: "Miami Marlins",
      wins: 2
    },
    totalsalary: {
      name: "Miami Marlins",
      salary: 91817860
    }
  },
  {
    coordinates: [43.028232, -87.970966],
    title: "Miller Park- Milwaukee Brewers",
    total: {
      name: "Milwaukee Brewers",
      wins: 3913
    },
    Worldseries: {
      name: "Milwaukee Brewers",
      wins: 0
    },
    totalsalary: {
      name: "Milwaukee Brewers",
      salary: 108982016
    }
  },
  {
    coordinates: [44.981749, -93.278026],
    title: "Target Field - Minnesota Twins",
    total: {
      name: "Minnesota Twins",
      wins: 8939
    },
    Worldseries: {
      name: "Minnesota Twins",
      wins: 2
    },
    totalsalary: {
      name: "Minnesota Twins",
      salary: 115509520
    }
  },
  {
    coordinates: [40.757134, -73.84584],
    title: "Citi Field - New York Mets",
    total: {
      name: "New York Mets",
      wins: 4448
    },
    Worldseries: {
      name: "New York Mets",
      wins: 2
    },
    totalsalary: {
      name: "New York Mets",
      salary: 150187987
    }
  },
  {
    coordinates: [40.829586, -73.926413],
    title: "Yankee Stadium - New York Yankees",
    total: {
      name: "New York Yankees",
      wins: 10378
    },
    Worldseries: {
      name: "New York Yankees",
      wins: 27
    },
    totalsalary: {
      name: "New York Yankees",
      salary: 180098151
    }
  },
  {
    coordinates: [37.751619, -122.200451],
    title: "Oakland-Alameda County Coliseum - Oakland A's",
    total: {
      name: "Oakland A's",
      wins: 9064
    },
    Worldseries: {
      name: "Oakland A's",
      wins: 4
    },
    totalsalary: {
      name: "Oakland A's",
      salary: 80315288
    }
  },
  {
    coordinates: [39.906109, -75.166485],
    title: "Citizens Bank Park - Philidelphia Phillies",
    total: {
      name: "Philidelphia Phillies",
      wins: 9825
    },
    Worldseries: {
      name: "Philidelphia Phillies",
      wins: 2
    },
    totalsalary: {
      name: "Philidelphia Phillies",
      salary: 95778952
    }
  },
  {
    coordinates: [33.44542, -112.066793],
    title: "Chase Field - Arizona Diamondbacks",
    total: {
      name: "Arizona Diamondbacks",
      wins: 1788
    },
    Worldseries: {
      name: "Arizona Diamondbacks",
      wins: 1
    },
    totalsalary: {
      name: "Arizona Diamondbacks",
      salary: 143324597
    }
  },
  {
    coordinates: [40.44684, -80.005683],
    title: "PNC Park - Pittsburgh Pirates",
    total: {
      name: "Pittsburgh Pirates",
      wins: 10545
    },
    Worldseries: {
      name: "Pittsburgh Pirates",
      wins: 5
    },
    totalsalary: {
      name: "Pittsburgh Pirates",
      salary: 91025861
    }
  },
  {
    coordinates: [32.70753, -117.157056],
    title: "Petco Park - San Diego Padres",
    total: {
      name: "San Diego Padres",
      wins: 3783
    },
    Worldseries: {
      name: "San Diego Padres",
      wins: 0
    },
    totalsalary: {
      name: "San Diego Padres",
      salary: 103843635
    }
  },
  {
    coordinates: [47.591443, -122.332283],
    title: "T-Mobile Park - Seattle Mariners",
    total: {
      name: "Seattle Mariners",
      wins: 3219
    },
    Worldseries: {
      name: "Seattle Mariners",
      wins: 0
    },
    totalsalary: {
      name: "Seattle Mariners",
      salary: 160993827
    }
  },
  {
    coordinates: [37.778324, -122.389221],
    title: "Oracle Park - San Francisco Giants",
    total: {
      name: "San Francisco Giants",
      wins: 11194
    },
    Worldseries: {
      name: "San Francisco Giants",
      wins: 3
    },
    totalsalary: {
      name: "San Francisco Giants",
      salary: 205665348
    }
  },
  {
    coordinates: [38.622622, -90.192841],
    title: "Busch Stadium - St. Louis Cardinals",
    total: {
      name: "St. Louis Cardinals",
      wins: 10918
    },
    Worldseries: {
      name: "St. Louis Cardinals",
      wins: 11
    },
    totalsalary: {
      name: "St. Louis Cardinals",
      salary: 163784311
    }
  },
  {
    coordinates: [27.768254, -82.653431],
    title: "Tropicana Field - Tampa Bay Rays",
    total: {
      name: "Tampa Bay Rays",
      wins: 3415
    },
    Worldseries: {
      name: "Tampa Bay Rays",
      wins: 0
    },
    totalsalary: {
      name: "Tampa Bay Rays",
      salary: 68810167
    }
  },
  {
    coordinates: [43.641256, -79.389054],
    title: "Rogers Centre - Toronto Blue Jays",
    total: {
      name: "Toronto Blue Jays",
      wins: 1962
    },
    Worldseries: {
      name: "Toronto Blue Jays",
      wins: 2
    },
    totalsalary: {
      name: "Toronto Blue Jays",
      salary: 150946147
    }
  },
  {
    coordinates: [38.872987, -77.007435],
    title: "Nationals Park - Washington Nationals",
    total: {
      name: "Washington Nationals",
      wins: 4003
    },
    Worldseries: {
      name: "Washington Nationals",
      wins: 1
    },
    totalsalary: {
      name: "Washington Nationals",
      salary: 181382609
    }
  },
  {
    coordinates: [32.7510, -97.0830],
    title: "Globe Life Park - Texas Rangers",
    total: {
      name: "Texas Rangers",
      wins: 4522
    },
    Worldseries: {
      name: "Texas Rangers",
      wins: 1
    },
    totalsalary: {
      name: "Texas Rangers",
      salary: 140625018
    }
  }
];



var teammarkers1 = [];
var teammarkers2 = [];
var teammarkers3 = [];
var teammarkers4 = [];

// Loop through locations and create city and state markers
for (var i = 0; i < locations.length; i++) {
  // Setting the marker radius for the state by passing population into the markerSize function
  teammarkers1.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "white",
      fillColor: "white",
      radius: markerSize(locations[i].total.wins)
    })
  );
  teammarkers2.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "red",
      fillColor: "red",
      radius: markerSizews(locations[i].Worldseries.wins)
    })
  );
  teammarkers3.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "green",
      fillColor: "green",
      radius: markerSizesalary(locations[i].totalsalary.salary)
    })
  );
  teammarkers4.push(
    L.marker(locations[i].coordinates)
      .bindPopup("<h3>" + locations[i].title + "</h3>")
  );
  console.log(teammarkers1)
  console.log(teammarkers2)
}
// Create base layers

// Streetmap Layer
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
});

// Create two separate layer groups: one for cities and one for states
var teams_wins = L.layerGroup(teammarkers1);
var teams_ws = L.layerGroup(teammarkers2);
var salary = L.layerGroup(teammarkers3);
var teamloc = L.layerGroup(teammarkers4);

// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};

// Create an overlay object
var overlayMaps = {
  "Total Wins": teams_wins,
  "World Series Wins": teams_ws,
  "2018 Salaries": salary,
  "Team Locations": teamloc
};

// Define a map object
var myMap1 = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5,
  layers: [streetmap ,teamloc]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap1);

// var marker = L.marker([33.80029
//   , -117.882685], {
//   draggable: false,
//   title: "Angel Stadium of Anaheim - Anaheim Angels"
// }).addTo(myMap1);

// var marker = L.marker([33.89127, -84.4681], {
//   draggable: false,
//   title: "SunTrust Park - Atlanta Braves"
// }).addTo(myMap1);

// var marker = L.marker([39.283944, -76.621572
// ], {
//   draggable: false,
//   title: "Oriole Park at Camden Yards - Baltimore Orioles"
// }).addTo(myMap1);

// var marker = L.marker([42.346561, -71.097337
// ], {
//   draggable: false,
//   title: "Fenway Park - Boston Red Sox"
// }).addTo(myMap1);

// var marker = L.marker([41.948314, -87.655397
// ], {
//   draggable: false,
//   title: "Wrigley Field - Chicago Cubs"
// }).addTo(myMap1);

// var marker = L.marker([41.829892, -87.633703
// ], {
//   draggable: false,
//   title: "Guarantee Rate Park - Chicago White Sox"
// }).addTo(myMap1);

// var marker = L.marker([39.097213, -84.506483
// ], {
//   draggable: false,
//   title: "Great American Ballpark - Cincinnati Reds"
// }).addTo(myMap1);

// var marker = L.marker([41.496005, -81.685326
// ], {
//   draggable: false,
//   title: "Progressive Field - Cleveland Indians"
// }).addTo(myMap1);

// var marker = L.marker([39.756175, -104.99413
// ], {
//   draggable: false,
//   title: "Coors Field - Colorado Rockies"
// }).addTo(myMap1);

// var marker = L.marker([42.339063, -83.048627
// ], {
//   draggable: false,
//   title: "Comerica Park - Detroit Tigers"
// }).addTo(myMap1);

// var marker = L.marker([29.757041, -95.355429
// ], {
//   draggable: false,
//   title: "Minute Maid Park - Houston Astros"
// }).addTo(myMap1);

// var marker = L.marker([39.05160, -94.480149
// ], {
//   draggable: false,
//   title: "Kauffman Stadium - Kansas City Royals "
// }).addTo(myMap1);

// var marker = L.marker([51.5365, -0.0098
// ], {
//   draggable: false,
//   title: "Olympic Stadium MLB London Series- "
// }).addTo(myMap1);

// var marker = L.marker([34.073878, -118.239951
// ], {
//   draggable: false,
//   title: "Dodger Stadium"
// }).addTo(myMap1);

// var marker = L.marker([25.778165, -80.219541
// ], {
//   draggable: false,
//   title: "Miami Marlins Park"
// }).addTo(myMap1);

// var marker = L.marker([43.028232, -87.970966
// ], {
//   draggable: false,
//   title: "Miller Park- Milwaukee Brewers"
// }).addTo(myMap1);

// var marker = L.marker([44.981749, -93.278026
// ], {
//   draggable: false,
//   title: "Target Field - Minnesota Twins"
// }).addTo(myMap1);

// var marker = L.marker([40.757134, -73.84584
// ], {
//   draggable: false,
//   title: "Citi Field - New York Mets"
// }).addTo(myMap1);

// var marker = L.marker([40.829586, -73.926413
// ], {
//   draggable: false,
//   title: "Yankee Stadium - New York Yankees"
// }).addTo(myMap1);

// var marker = L.marker([37.751619, -122.200451
// ], {
//   draggable: false,
//   title: "Oakland-Alameda County Coliseum - Oakland A's"
// }).addTo(myMap1);

// var marker = L.marker([39.906109, -75.166485
// ], {
//   draggable: false,
//   title: "Citizens Bank Park - Philidelphia Phillies"
// }).addTo(myMap1);

// var marker = L.marker([33.44542, -112.066793
// ], {
//   draggable: false,
//   title: "Chase Field - Arizona Diamondbacks"
// }).addTo(myMap1);

// var marker = L.marker([40.44684, -80.005683
// ], {
//   draggable: false,
//   title: "PNC Park - Pittsburgh Pirates"
// }).addTo(myMap1);

// var marker = L.marker([32.70753, -117.157056
// ], {
//   draggable: false,
//   title: "Petco Park - San Diego Padres"
// }).addTo(myMap1);

// var marker = L.marker([47.591443, -122.332283
// ], {
//   draggable: false,
//   title: "T-Mobile Park - Seattle Mariners"
// }).addTo(myMap1);

// var marker = L.marker([37.778324, -122.389221
// ], {
//   draggable: false,
//   title: "Oracle Park - San Francisco Giants"
// }).addTo(myMap1);

// var marker = L.marker([38.622622, -90.192841
// ], {
//   draggable: false,
//   title: "Busch Stadium - St. Louis Cardinals"
// }).addTo(myMap1);

// var marker = L.marker([27.768254, -82.653431
// ], {
//   draggable: false,
//   title: "Tropicana Field - Tampa Bay Rays"
// }).addTo(myMap1);

// var marker = L.marker([43.641256, -79.389054
// ], {
//   draggable: false,
//   title: "Rogers Centre - Toronto Blue Jays"
// }).addTo(myMap1);

// var marker = L.marker([32.7510, -97.0830
// ], {
//   draggable: false,
//   title: "Globe Life Park - Texas Rangers"
// }).addTo(myMap1);

// var marker = L.marker([38.872987, -77.007435
// ], {
//   draggable: false,
//   title: "Nationals Park - Washington Nationals"
// }).addTo(myMap1);
