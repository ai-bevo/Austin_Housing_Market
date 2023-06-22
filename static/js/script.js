var jsonData = window.jsonData;

console.log('Script is running'); 

// Generate Plotly graph
var plotlyData = [{
    x: [jsonData.year],                 // Year as x-axis
    y: [jsonData.average_price],        // Average price as y-axis
    type: 'bar',                        // Bar chart type
    marker: {
      color: 'blue'                     // Customize the bar color
    }
}];

var layout = {
    title: 'Average Price per Year',
    xaxis: {
      title: 'Year'
    },
    yaxis: {
      title: 'Average Price'
    }
  };
  
Plotly.newPlot('plotlyGraph', plotlyData, layout);