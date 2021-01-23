// Set default x/y axis variables.
var chosenXAxis = "W";
var chosenYAxis = "HR";
// Function used for updating x-scale var upon click on axis label.
function xScale(data, chosenXAxis, chartWidth) {
    // Create scales.
    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(data, d => d[chosenXAxis]) * .8,
            d3.max(data, d => d[chosenXAxis]) * 1.1])
        .range([0, chartWidth]);
    return xLinearScale;
}
// Function used for updating xAxis var upon click on axis label.
function renderXAxes(newXScale, xAxis) {
    var bottomAxis = d3.axisBottom(newXScale);
    xAxis.transition()
        .duration(1000)
        .call(bottomAxis);
    return xAxis;
}
// Function used for updating y-scale var upon click on axis label.
function yScale(data, chosenYAxis, chartHeight) {
    // Create scales.
    var yLinearScale = d3.scaleLinear()
        .domain([d3.min(data, d => d[chosenYAxis]) * .8,
            d3.max(data, d => d[chosenYAxis]) * 1.2])
        .range([chartHeight, 0]);
    return yLinearScale;
}
// Function used for updating yAxis var upon click on axis label.
function renderYAxes(newYScale, yAxis) {
    var leftAxis = d3.axisLeft(newYScale);
    yAxis.transition()
        .duration(1000)
        .call(leftAxis);
    return yAxis;
}
// Function used for updating circles group with a transition to new circles.
function renderCircles(circlesGroup, newXScale, newYScale, chosenXAxis, chosenYAxis) {
    circlesGroup.transition()
        .duration(1000)
        .attr("cx", d => newXScale(d[chosenXAxis]))
        .attr("cy", d => newYScale(d[chosenYAxis]));
    return circlesGroup;
}
// Function used for updating text in circles group with a transition to new text.
function renderText(circletextGroup, newXScale, newYScale, chosenXAxis, chosenYAxis) {
    circletextGroup.transition()
        .duration(1000)
        .attr("x", d => newXScale(d[chosenXAxis]))
        .attr("y", d => newYScale(d[chosenYAxis]));
    return circletextGroup;
}
// Function used for updating circles group with new tooltip.
function updateToolTip(chosenXAxis, chosenYAxis, circlesGroup, textGroup) {
    // Conditional for X Axis.
    if (chosenXAxis === "W") {
        var xlabel = "Wins: ";
    } else {
        var xlabel = "Losses: "
    }
    // Conditional for Y Axis.
    if (chosenYAxis === "HR") {
        var ylabel = "Homeruns: ";
    } else if (chosenYAxis === "SO") {
        var ylabel = "Strikeouts: "
    } else {
        var ylabel = "ERA: "
    }
    // Define tooltip.
    var toolTip = d3.tip()
        .offset([120, -60])
        .attr("class", "d3-tip")
        .html(function(d) {
            if (chosenXAxis === "W") {
                // All yAxis tooltip labels presented and formated as %.
                // Display Age without format for xAxis.
                return (`${d.name}<hr>${xlabel} ${d[chosenXAxis]}<br>${ylabel}${d[chosenYAxis]}`);
                } else if (chosenXAxis !== "L" && chosenXAxis !== "W") {
                // Display Income in dollars for xAxis.
                return (`${d.name}<hr>${xlabel} ${d[chosenXAxis]}<br>${ylabel}${d[chosenYAxis]}`);
                } else {
                // Display Poverty as percentage for xAxis.
                return (`${d.name}<hr>${xlabel}${d[chosenXAxis]}<br>${ylabel}${d[chosenYAxis]}`);
                }      
        });
    circlesGroup.call(toolTip);
    // Create "mouseover" event listener to display tool tip.
    circlesGroup
        .on("mouseover", function(data) {
            toolTip.show(data, this);
        })
        .on("mouseout", function(data) {
            toolTip.hide(data);
        });
    textGroup
        .on("mouseover", function(data) {
            toolTip.show(data, this);
        })
        .on("mouseout", function(data) {
            toolTip.hide(data);
        });
    return circlesGroup;
}
function makeResponsive() {
    // Select div by id.
    var svgArea = d3.select("#scatter").select("svg");
    // Clear SVG.
    if (!svgArea.empty()) {
        svgArea.remove();
    }
    //SVG params.
    var svgHeight = window.innerHeight/1.2;
    var svgWidth = window.innerWidth/1.7;
    // Margins.
    var margin = {
        top: 50,
        right: 50,
        bottom: 100,
        left: 80
    };
    // Chart area minus margins.
    var chartHeight = svgHeight - margin.top - margin.bottom;
    var chartWidth = svgWidth - margin.left - margin.right;
    // Create an SVG wrapper, append an SVG group that will hold our chart,
    // and shift the latter by left and top margins.
    var svg = d3
    .select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
    // Append an SVG group
    var chartGroup = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);
    d3.csv("assets/data/2018.csv").then(function(demoData, err) {
        if (err) throw err;
        // Parse data.
        demoData.forEach(function(data) {
            data.W = +data.W;
            data.HR = +data.HR;
            data.L = +data.L;
            data.SO = +data.SO;
            data.ERA = data.ERA;
        });
        // Create x/y linear scales.
        var xLinearScale = xScale(demoData, chosenXAxis, chartWidth);
        var yLinearScale = yScale(demoData, chosenYAxis, chartHeight);
        // Create initial axis functions.
        var bottomAxis =d3.axisBottom(xLinearScale);
        var leftAxis = d3.axisLeft(yLinearScale);
        // Append x axis.
        var xAxis = chartGroup.append("g")
            .attr("transform", `translate(0, ${chartHeight})`)
            .call(bottomAxis);
        // Append y axis.
        var yAxis = chartGroup.append("g")
            .call(leftAxis);
        // Set data used for circles.
        var circlesGroup = chartGroup.selectAll("circle")
            .data(demoData);
        // Bind data.
        var elemEnter = circlesGroup.enter();
        // Create circles.
        var circle = elemEnter.append("circle")
            .attr("cx", d => xLinearScale(d[chosenXAxis]))
            .attr("cy", d => yLinearScale(d[chosenYAxis]))
            .attr("r", 25)
            .classed("stateCircle", true);
        // Create circle text.
        var circleText = elemEnter.append("text")            
            .attr("x", d => xLinearScale(d[chosenXAxis]))
            .attr("y", d => yLinearScale(d[chosenYAxis]))
            .attr("dy", ".35em") 
            .text(d => d.franchID)
            .classed("stateText", true);
        // Update tool tip function above csv import.
        var circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, circle, circleText);
        // Add x label groups and labels.
        var xLabelsGroup = chartGroup.append("g")
            .attr("transform", `translate(${chartWidth / 2}, ${chartHeight + 20})`);
        var winsLabel = xLabelsGroup.append("text")
            .attr("x", 0)
            .attr("y", 20)
            .attr("value", "W") // value to grab for event listener
            .classed("active", true)
            .text("Wins");
        var lossesLabel = xLabelsGroup.append("text")
            .attr("x", 0)
            .attr("y", 40)
            .attr("value", "L") // value to grab for event listener
            .classed("inactive", true)
            .text("Losses");

        // Add y labels group and labels.
        var yLabelsGroup = chartGroup.append("g")
            .attr("transform", "rotate(-90)");
        var homerunsLabel = yLabelsGroup.append("text")
            .attr("x", 0 - (chartHeight / 2))
            .attr("y", 40 - margin.left)
            .attr("dy", "1em")
            .attr("value", "HR")
            .classed("active", true)
            .text("Homeruns");
        var strikeoutsLabel = yLabelsGroup.append("text")
            .attr("x", 0 - (chartHeight / 2))
            .attr("y", 20 - margin.left)
            .attr("dy", "1em")
            .attr("value", "SO")
            .classed("inactive", true)
            .text("Strikeouts");
        var eraLabel = yLabelsGroup.append("text")
            .attr("x", 0 - (chartHeight / 2))
            .attr("y", 0 - margin.left)
            .attr("dy", "1em")
            .attr("value", "ERA")
            .classed("inactive", true)
            .text("ERA");
        // X labels event listener.
        xLabelsGroup.selectAll("text")
            .on("click", function() {
                // Grab selected label.
                chosenXAxis = d3.select(this).attr("value");
                // Update xLinearScale.
                xLinearScale = xScale(demoData, chosenXAxis, chartWidth);
                // Render xAxis.
                xAxis = renderXAxes(xLinearScale, xAxis);
                // Switch active/inactive labels.
                if (chosenXAxis === "W") {
                    winsLabel
                        .classed("active", true)
                        .classed("inactive", false);
                    lossesLabel
                        .classed("active", false)
                        .classed("inactive", true);
                } else if (chosenXAxis === "L") {
                    winsLabel
                        .classed("active", false)
                        .classed("inactive", true);
                    lossesLabel
                        .classed("active", true)
                        .classed("inactive", false);
                } else {
                    winsLabel
                        .classed("active", false)
                        .classed("inactive", true);
                    lossesLabel
                        .classed("active", false)
                        .classed("inactive", true)
                }
                // Update circles with new x values.
                circle = renderCircles(circlesGroup, xLinearScale, yLinearScale, chosenXAxis, chosenYAxis);
                // Update tool tips with new info.
                circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, circle, circleText);
                // Update circles text with new values.
                circleText = renderText(circleText, xLinearScale, yLinearScale, chosenXAxis, chosenYAxis);
            });
        // Y Labels event listener.
        yLabelsGroup.selectAll("text")
            .on("click", function() {
                // Grab selected label.
                chosenYAxis = d3.select(this).attr("value");
                // Update yLinearScale.
                yLinearScale = yScale(demoData, chosenYAxis, chartHeight);
                // Update yAxis.
                yAxis = renderYAxes(yLinearScale, yAxis);
                // Changes classes to change bold text.
                if (chosenYAxis === "HR") {
                    homerunsLabel
                        .classed("active", true)
                        .classed("inactive", false);
                    strikeoutsLabel
                        .classed("active", false)
                        .classed("inactive", true);
                    eraLabel
                        .classed("active", false)
                        .classed("inactive", true);
                } else if (chosenYAxis === "SO"){
                    homerunsLabel
                        .classed("active", false)
                        .classed("inactive", true);
                    strikeoutsLabel
                        .classed("active", true)
                        .classed("inactive", false);
                    eraLabel
                        .classed("active", false)
                        .classed("inactive", true);
                } else {
                    homerunsLabel
                        .classed("active", false)
                        .classed("inactive", true);
                    strikeoutsLabel
                        .classed("active", false)
                        .classed("inactive", true);
                    eraLabel
                        .classed("active", true)
                        .classed("inactive", false);
                }
                // Update circles with new y values.
                circle = renderCircles(circlesGroup, xLinearScale, yLinearScale, chosenXAxis, chosenYAxis);
                // Update circles text with new values.
                circleText = renderText(circleText, xLinearScale, yLinearScale, chosenXAxis, chosenYAxis);
                // Update tool tips with new info.
                circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, circle, circleText);
            });
    }).catch(function(err) {
        console.log(err);
    });
}
makeResponsive();
// Event listener for window resize.
// When the browser window is resized, makeResponsive() is called.
d3.select(window).on("resize", makeResponsive);