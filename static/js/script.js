const jsonData = "http://127.0.0.1:5000/api/v1.0/annual_sales_table";

d3.json(jsonData)
  .then(function(data) {
    yearArray = [];
    priceArray = []
    for(let i = 0; i < data.length; i++){
      yearArray.push(data[i]['year'])
      priceArray.push(data[i]['average_price'])
    }
    console.log(data);
    var plotlyData = [{
      x: yearArray,                       
      y:  priceArray,
      type: 'scatter',
      marker: {
        color: 'green'
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

    Plotly.newPlot('plot', plotlyData, layout);
    
  })
  .catch(function(error) {
    console.error('Error:', error);
  });
  
  
// Generate Plotly graph
