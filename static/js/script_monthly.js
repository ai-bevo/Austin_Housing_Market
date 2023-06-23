const jsonDataMonth = "http://127.0.0.1:5000/api/v1.0/monthly_sales_table";

d3.json(jsonDataMonth)
  .then(function(data) {
    monthArray = [];
    priceArray = []
    for(let i = 0; i < data.length; i++){
      monthArray.push(data[i]['dates'])
      priceArray.push(data[i]['average_price'])
    }
    console.log(data);
    var plotlyData = [{
      x: monthArray,                       
      y:  priceArray,
      type: 'scatter',
      marker: {
        color: 'blue'
      }
    }];

    var layout = {
      title: 'Average Price per Month',
      xaxis: {
        title: 'Month'
      },
      yaxis: {
        title: 'Average Price'
      }
    };

    Plotly.newPlot('plot_month', plotlyData, layout);
    
  })
  .catch(function(error) {
    console.error('Error:', error);
  });
  
  
// Generate Plotly graph
