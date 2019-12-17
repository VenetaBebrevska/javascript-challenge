// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Console log the UFO data from data.js
console.log(data);

data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key.value);
        var cell = row.append("td");
        cell.text(value);        
    })    
})

// Getting reference to the button
var button = d3.select("#filter-btn");

// Attaching the event to the handler
button.on("click", function() {

// Getting reference to the input
    var input = d3.select("#form-control");

// Get the value property of the input and filter
    var inputValue = input.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);
})
