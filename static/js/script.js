const jsonData = "http://127.0.0.1:5000/api/v1.0/annual_sales_table";
const jsonDataMonth = "http://127.0.0.1:5000/api/v1.0/monthly_sales_table";
window.onresize = handleScreenSizeChange;
// HERE //
d3.select("#annual").on("click", function() {
  handleGraphVisibility("annual");
});

d3.select("#monthly").on("click", function() {
  handleGraphVisibility("monthly");
});

function handleScreenSizeChange() {
    if (window.innerWidth < 576) {
      // Code to regenerate the graphs for small screens
      if (graphID == "annual") {
        d3.select(".month_class").style("display", "none");
        d3.select(".year_class").style("display", "block");
      } else if (graphID == "monthly") {
        d3.select(".year_class").style("display", "none");
        d3.select(".month_class").style("display", "block");
      }
    }
  }

function handleResize() {
    if (graphID == "annual") {
        d3.select(".month_class").style("display", "none");
        d3.select(".year_class").style("display", "block");
      } else if (graphID == "monthly") {
        d3.select(".year_class").style("display", "none");
        d3.select(".month_class").style("display", "block");
      }
    }

function handleGraphVisibility(graphID) {
    if (graphID == "annual") {
        d3.select(".month_class").style("display", "none");
        d3.select(".year_class").style("display", "block");
      } else if (graphID == "monthly") {
        d3.select(".year_class").style("display", "none");
        d3.select(".month_class").style("display", "block");
      }
    }

function annualOption(){
    d3.json(jsonData).then(function(data) {
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
});
}

function monthlyOption(){
  d3.json(jsonDataMonth).then(function(data){
      //console.log(data);
      monthArray = [];
      priceArray = []
      for(let i = 0; i < data.length; i++){
          monthArray.push(data[i]['dates'])
          priceArray.push(data[i]['average_price'])
      }
      
      var plotlyData = [{
      x: monthArray,                       
      y: priceArray,
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
  });
}
// TO HERE //


//technically we could delete the below since it's added to the functions
// d3.json(jsonData)
//   .then(function(data) {
//     yearArray = [];
//     priceArray = []
//     for(let i = 0; i < data.length; i++){
//       yearArray.push(data[i]['year'])
//       priceArray.push(data[i]['average_price'])
//     }
//     console.log(data);
//     var plotlyData = [{
//       x: yearArray,                       
//       y:  priceArray,
//       type: 'scatter',
//       marker: {
//         color: 'green'
//       }
//     }];

//     var layout = {
//       title: 'Average Price per Year',
//       xaxis: {
//         title: 'Year'
//       },
//       yaxis: {
//         title: 'Average Price'
//       }
//     };

//     Plotly.newPlot('plot', plotlyData, layout);
    
//   })
//   .catch(function(error) {
//     console.error('Error:', error);
// });
// // Generate Plotly graph



// d3.json(jsonDataMonth)
//   .then(function(data) {
//     monthArray = [];
//     priceArray = []
//     for(let i = 0; i < data.length; i++){
//       monthArray.push(data[i]['dates'])
//       priceArray.push(data[i]['average_price'])
//     }
//     console.log(data);
//     var plotlyData = [{
//       x: monthArray,                       
//       y:  priceArray,
//       type: 'scatter',
//       marker: {
//         color: 'blue'
//       }
//     }];

//     var layout = {
//       title: 'Average Price per Month',
//       xaxis: {
//         title: 'Month'
//       },
//       yaxis: {
//         title: 'Average Price'
//       }
//     };

//     Plotly.newPlot('plot_month', plotlyData, layout);
    
//   })
//   .catch(function(error) {
//     console.error('Error:', error);
// });
// Generate Plotly graph

