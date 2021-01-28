var json = "winpct.json";

function buildPlot() {
    d3.json(json).then(function(data) {
        console.log(data)
        var teamid = data.teamid
        var total_2018 = data.total_2018
        var win_pct = data.win_pct
        var x = [];
        var y = [];
        var name = [];
        data.forEach((item) => {
            x.push(item.win_pct);
            y.push(item.total_2018);
        });
        data.forEach((item) => {
            name.push(item.name);
        });
        var trace1 = {
            type: "scatter",
            mode: "markers",
            text: ["ARI", "ATL", "BAL", "BOS", "CHC", "CHW", "CIN", "CLE", "COL", "DET", "HOU", "KCR", "ANA", "LAD", "MIA", "MIL", "MIN", "NYM","NYY","OAK","PHI","PIT","SDP","SFG","SEA","STL","TBD","TEX","TOR","WSN"],
            marker: {
                size: 18,
                //color: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
                colorscale: 'Blues',
                line: {
                    color: 'dark-blue',
                    width: 2
                }
            },
            x: x,
            y: y,
        };

        var data1 = [trace1];

        var layout = {
            xaxis: {
                range: [0, 1.000],
                title: {
                    text: 'Team Win Percentage',
                    font: {
                        size: 18,
                        color: 'black'
                    }
                }
            },
            yaxis: {
                // autorange: true,
                range: [0,240000000],
                title: {
                    text: 'Total Salary Spending (2018)',
                    font: {
                        size: 18,
                        color: 'black'
                    }
                }
            },
            title: "Team Win Percentage vs. Salary Spending"
        };

        Plotly.newPlot("plot", data1, layout);
    });
}

buildPlot();