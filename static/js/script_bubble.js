const jsonDataBubble = "http://127.0.0.1:5000/api/v1.0/price_distribution_table";

d3.json(jsonDataBubble)
  .then(function(data) {
    priceRange1 = [];
    priceRange2 = [];
    priceRange3 = [];
    priceRange4 = [];
    priceRange5 = [];
    priceRange6 = [];
    priceRange7 = [];
    priceRange8 = [];
    priceRange9 = [];
    priceRange10 = [];
    priceRange11 = [];
    priceRangeArray = [];
    yearArray = ['2011', '2012', '2013', '2014', '2015', '2016', '2017',
              '2018', '2019', '2020', '2021', '2022']
    for(let i = 0; i < yearArray.length; i++){
      priceRange1.push(data[0][yearArray[i]])
      priceRange2.push(data[1][yearArray[i]])
      priceRange3.push(data[2][yearArray[i]])
      priceRange4.push(data[3][yearArray[i]])
      priceRange5.push(data[4][yearArray[i]])
      priceRange6.push(data[5][yearArray[i]])
      priceRange7.push(data[6][yearArray[i]])
      priceRange8.push(data[7][yearArray[i]])
      priceRange9.push(data[8][yearArray[i]])
      priceRange10.push(data[9][yearArray[i]])
      priceRange11.push(data[10][yearArray[i]])
    }
    console.log("Bubble Chart Data", data);
       
    let bubbleTrace1 = {
      x: yearArray,                       
      y: priceRange1,
      name: 'Price Range < $70,000',
      type: 'scatter',
      mode: 'markers',
      opacity: 0.6,
      marker:{
        size: priceRange1,
        sizemode: 'area',
        sizeref: 0.5*Math.max(...priceRange1)/(15**2),
        color: 'blue'
      }
    };

    let bubbleTrace2 = {
      x: yearArray,                       
      y: priceRange2,
      name: 'Price Range $70,000 - $99,999',
      mode: 'markers',
      opacity: 0.6,
      marker:{
        size: priceRange2,
        sizemode: 'area',
        sizeref: 0.5*Math.max(...priceRange1)/(15**2),
        color: 'green'
      }
    };

    let bubbleTrace3 = {
      x: yearArray,                       
      y: priceRange3,
      name: 'Price Range $100,000 - $149,999',
      mode: 'markers',
      opacity: 0.6,
      marker:{
        size: priceRange3,
        sizemode: 'area',
        sizeref: 0.5*Math.max(...priceRange1)/(15**2),
        color: 'red'
      }
    };

    let bubbleTrace4 = {
      x: yearArray,                       
      y: priceRange4,
      name: 'Price Range $150,000 - $199,999',
      mode: 'markers',
      opacity: 0.6,
      marker:{
        size: priceRange4,
        sizemode: 'area',
        sizeref: 0.5*Math.max(...priceRange1)/(15**2),
        color: 'orange'
      }
    };

    let bubbleTrace5 = {
      x: yearArray,                       
      y: priceRange5,
      name: 'Price Range $200,000 - $249,999',
      mode: 'markers',
      opacity: 0.6,
      marker:{
        size: priceRange5,
        sizemode: 'area',
        sizeref: 0.5*Math.max(...priceRange1)/(15**2),
        color: 'purple'
      }
    };

    let bubbleTrace6 = {
      x: yearArray,                       
      y: priceRange6,
      name: 'Price Range $250,000 - $299,999',
      mode: 'markers',
      opacity: 0.6,
      marker:{
        size: priceRange6,
        sizemode: 'area',
        sizeref: 0.5*Math.max(...priceRange1)/(15**2),
        color: 'yellow'
      }
    };

    let bubbleTrace7 = {
      x: yearArray,                       
      y: priceRange7,
      name: 'Price Range $300,000 - $399,999',
      mode: 'markers',
      opacity: 0.6,
      marker:{
        size: priceRange7,
        sizemode: 'area',
        sizeref: 0.5*Math.max(...priceRange1)/(15**2),
        color: 'brown'
      }
    };

    let bubbleTrace8 = {
      x: yearArray,                       
      y: priceRange8,
      name: 'Price Range $400,000 - $499,999',
      mode: 'markers',
      opacity: 0.6,
      marker:{
        size: priceRange8,
        sizemode: 'area',
        sizeref: 0.5*Math.max(...priceRange1)/(15**2),
        color: 'pink'
      }
    };

    let bubbleTrace9 = {
      x: yearArray,                       
      y: priceRange9,
      name: 'Price Range $500,000 - $749,999',
      mode: 'markers',
      opacity: 0.6,
      marker:{
        size: priceRange9,
        sizemode: 'area',
        sizeref: 0.5*Math.max(...priceRange1)/(15**2),
        color: 'gray'
      }
    };

    let bubbleTrace10 = {
      x: yearArray,                       
      y: priceRange10,
      name: 'Price Range $750,000 - $999,999',
      mode: 'markers',
      opacity: 0.6,
      marker:{
        size: priceRange10,
        sizemode: 'area',
        sizeref: 0.5*Math.max(...priceRange1)/(15**2),
        color: 'black'
      }
    };

    let bubbleTrace11 = {
      x: yearArray,                       
      y: priceRange11,
      name: 'Price Range > $1,000,000',
      mode: 'markers',
      opacity: 0.6,
      marker:{
        size: priceRange11,
        sizemode: 'area',
        sizeref: 0.5*Math.max(...priceRange1)/(15**2),
        color: 'cyan'
      }
    };

    let bubbleLayout = {
      title: 'Price Distribution: 2011 - 2022',
      xaxis: {title: 'Year'},
      yaxis: {title: 'Percentage of Sales'},
      legend: {itemsizing: 'constant'}
    };

    bubbleData = [bubbleTrace1, bubbleTrace2, bubbleTrace3, bubbleTrace4, 
                  bubbleTrace5, bubbleTrace6, bubbleTrace7, bubbleTrace8, 
                  bubbleTrace9, bubbleTrace10, bubbleTrace11];

    Plotly.newPlot('bubble', bubbleData, bubbleLayout);
    
  })
  .catch(function(error) {
    console.error('Error:', error);
  });
  
  

