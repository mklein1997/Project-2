var url = "http://127.0.0.1:5000/api/winpct/";

function buildPlot() {
    d3.json(url).then(function(data) {
        var teamid = data.teamid
        var total_2018 = data.total_2018
        var win_pct = data.win_pct

        var trace1 = {
            type: "scatter",
            mode: "lines",
            name: "Team Win Percentage vs. Salary Spending (Total, 2018)",
            x: win_pct,
            y: total_2018,
            line: {
                color: "green"
            }
        };

        var data1 = [trace1];

        var layout = {
            title: "Team Win Percentage vs. Salary Spending (Total, 2018)",
            xaxis: {
                range: [0, 1.000],
                type: "linear"
            },
            yaxis: {
                autorange: true,
                type: "linear"
            }
        };

        Plotly.newPlot("plot", data1, layout);
    });
}

buildPlot();