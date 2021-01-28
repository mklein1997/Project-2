var json = "winpct.json";

function buildPlot() {
    d3.json(json).then(function(data) {
        console.log(data)
        var teamid = data.teamid
        var total_2018 = data.total_2018
        var win_pct = data.win_pct
        console.log(win_pct)
        var x = [];
        var y = [];
        data.forEach((item) => {
            x.push(item.win_pct);
            y.push(item.total_2018);
        });
        var trace1 = {
            type: "scatter",
            mode: "markers",
            name: "Team Win Percentage vs. Salary Spending (Total, 2018)",
            x: x,
            y: y,
        };

        var data1 = [trace1];

        var layout = {
            title: "Team Win Percentage vs. Salary Spending (Total, 2018)",
            xaxis: {
                range: [0, 1.000],
                type: "linear"
            },
            yaxis: {
                // autorange: true,
                range: [0,240000000],
                type: "linear"
            }
        };

        Plotly.newPlot("plot", data1, layout);
    });
}

buildPlot();