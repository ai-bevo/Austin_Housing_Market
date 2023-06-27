   const jsonData1 = "http://127.0.0.1:5000/api/v1.0/monthly_sales_table";
   let monthArray = [];
   let salesArray = [];
   let listingArray = [];
   let avgPriceArray = [];
   let medPriceArray = [];
   let monthInventArray =[];
   let linechart;
   
   d3.json(jsonData1).then(function(data) {
     for (let i = 0; i < data.length; i++) {
       let sale = data[i]['sales'];
       let listin =data[i]['total_listings'];
       let avgPrice = data[i]['average_price'];
       let medPrice = data[i]['median_price'];
       let monthInvent = data[i]['months_inventory'];
       monthArray.push(data[i]['dates']);
       salesArray.push(parseInt(sale.replace(/,/g, ''), 10));
       listingArray.push(parseInt(listin.replace(/,/g, ''), 10));
       avgPriceArray.push(parseInt(avgPrice.replace(/,/g, ''), 10));
       medPriceArray.push(parseInt(medPrice.replace(/,/g, ''), 10));
       monthInventArray.push(parseFloat(monthInvent));
     }
   
     console.log(monthArray.length);
     console.log(salesArray);
     console.log(listingArray);
     console.log(avgPriceArray);
     console.log(medPriceArray);
     console.log(monthInventArray);
   
     createChart();
   });
   
   function createChart() {
     const CHART = document.getElementById("dubLineChart").getContext('2d');
     linechart = new Chart(CHART, {
       type: 'line',
       data: {
         labels: monthArray,
         datasets: [
           {
             label: "Sales vs. Months",
             data: salesArray,
             borderColor: 'red',
             backgroundColor: 'rgba(255, 0, 0, 0.2)',
             tension: 0.4,
             fill: true
           },
           {
             label: "Total Listings vs. Months",
             data: listingArray,
             borderColor: 'blue',
             backgroundColor: 'rgba(0, 0, 255, 0.2)',
             tension: 0.4,
             fill: true
           }
         ]
       },
       options: {
         responsive: true,
         plugins: {
           legend: {
             position: 'top'
           },
           title: {
             display: true,
             text: 'Comparison of Change in Sales and Total Listings from Jan-90 to Apr-23'
           }
         },
         scales: {
           y: {
             beginAtZero: true,
             //max: 17000 // Set the maximum value of the y-axis to 3000
           }
         }
       }
     });
   }
   
// Add click event listener to the buttons
const salesVsListBtn = document.getElementById("SalesVsList");
salesVsListBtn.addEventListener("click", handleSalesVsListClick);

const avgVsMedPriceBtn = document.getElementById("AvgVsMedPrice");
avgVsMedPriceBtn.addEventListener("click", handleAvgVsMedPriceClick);

const monthlyInventBtn = document.getElementById("monthlyInventory");
monthlyInventBtn.addEventListener("click", handleMonthlyInventoryClick);

const salesVsMedPriceBtn = document.getElementById("salesVsMedPrice");
salesVsMedPriceBtn.addEventListener("click", handleSalesVsMedPriceClick);

const salesVsMonthlyInventBtn = document.getElementById("salesVsInventory");
salesVsMonthlyInventBtn.addEventListener("click", handleSalesVsMonthlyInventoryClick);

const medPriceVsListBtn = document.getElementById("medPriceVsList");
medPriceVsListBtn.addEventListener("click", handleMedPriceVsListClick);

function handleSalesVsListClick() {
  // Check if linechart is defined
  if (linechart) {
        // Reset the axis configuration
    linechart.options.scales = {
      y: {
        beginAtZero: true
      }
    };
    // Update the chart to show Sales vs Total Listings data
    linechart.data.datasets = [
      {
        label: "Sales vs. Months",
        data: salesArray,
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        tension: 0.4,
        fill: true
      },
      {
        label: "Total Listings vs. Months",
        data: listingArray,
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        tension: 0.4,
        fill: true
      }
    ];
    linechart.options.plugins.title.text = "Comparison of Change in Sales and Total Listings from Jan-90 to Apr-23";
    linechart.update();
  }
}

function handleAvgVsMedPriceClick() {
  // Check if linechart is defined
  if (linechart) {
      // Reset the axis configuration
      linechart.options.scales = {
        y: {beginAtZero: true
        }
      };
    // Update the chart to show Average vs Median Price data
    linechart.data.datasets = [
      {
        label: "Average Price vs. Months",
        data: avgPriceArray,
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        tension: 0.4,
        fill: true
      },
      {
        label: "Median Price vs. Months",
        data: medPriceArray,
        borderColor: 'purple',
        backgroundColor: 'rgba(128, 0, 128, 0.2)',
        tension: 0.4,
        fill: true
      }
    ];
    linechart.options.plugins.title.text = "Comparison of Average Price and Median Price from Jan-90 to Apr-23";
    linechart.update();
  }
}

function handleSalesVsMedPriceClick() {
  // Check if linechart is defined
  if (linechart) {
      // Reset the axis configuration
      linechart.options.scales = {
        y: {beginAtZero: true
        }
      };
    // Update the chart to show Sales vs Median Price data
    linechart.data.datasets = [
      {
        label: "Sales vs. Months",
        data: salesArray,
        borderColor: 'coral',
        backgroundColor: 'rgba(238, 130, 238, 0.2)',
        tension: 0.4,
        fill: true,
        yAxisID: 'sales-axis' // Assign the dataset to a secondary y-axis
      },
      {
        label: "Median Price vs. Months",
        data: medPriceArray,
        borderColor: 'blue',
        backgroundColor: 'rgba(42, 213, 228, 0.2)',
        tension: 0.4,
        fill: true
      }
    ];
    linechart.options.plugins.title.text = "Comparison of Change in Sales and Median Price from Jan-90 to Apr-23";
    linechart.options.scales.y = {
      'sales-axis': {
        type: 'linear',
        beginAtZero: true,
        position: 'right' // Position the secondary y-axis on the right
      },
      'default': {
        type: 'linear',
        beginAtZero: true,
        position: 'left' // Position the primary y-axis on the left
      }
    };
    linechart.update();
  }
}

function handleSalesVsMonthlyInventoryClick() {
  // Check if linechart is defined
  if (linechart) {
    // Reset the axis configuration
    linechart.options.scales = {
      y: {beginAtZero: true
      }
    };
    // Update the chart to show Sales vs Median Price data
    linechart.data.datasets = [
      {
        label: "Sales vs. Months",
        data: salesArray,
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 27, 0.4)',
        tension: 0.4,
        fill: true,
        yAxisID: 'sales-axis' // Assign the dataset to a secondary y-axis
      },
      {
        label: "Monthly Inventory vs. Months",
        data: monthInventArray,
        borderColor: 'blue',
        backgroundColor: 'rgba(42, 213, 228, 0.2)',
        tension: 0.4,
        fill: true
      }
    ];
    linechart.options.plugins.title.text = "Comparison of Change in Sales and Monthly Inventory from Jan-90 to Apr-23";
    linechart.options.scales.y = {
      'sales-axis': {
        type: 'linear',
        beginAtZero: true,
        position: 'right' // Position the secondary y-axis on the right
      },
      'default': {
        type: 'linear',
        beginAtZero: true,
        position: 'left' // Position the primary y-axis on the left
      }
    };
    linechart.update();
  }
}

function handleMonthlyInventoryClick() {
  // Check if linechart is defined
  if (linechart) {
    // Reset the axis configuration
    linechart.options.scales = {
      y: {beginAtZero: true
      }
    };
    // Update the chart to show Average vs Median Price data
    linechart.data.datasets = [
      {
        label: "Monthly Inventory",
        data: monthInventArray,
        borderColor: 'orange',
        backgroundColor: 'rgba(255, 193, 141, 0.2)',
        tension: 0.4,
        fill: true
      },
    ];
    linechart.options.plugins.title.text = "Monthly Inventory (number of active listings and pending sales on the last day of the month) from Jan-90 to Apr-23";
    linechart.update();
  }
}

function handleMedPriceVsListClick() {
  // Check if linechart is defined
  if (linechart) {
    // Reset the axis configuration
    linechart.options.scales = {
      y: {beginAtZero: true
      }
    };
    // Update the chart to show Median Price vs Total Listings data
    linechart.data.datasets = [
      {
        label: "Median Price vs. Months",
        data: medPriceArray,
        borderColor: 'purple',
        backgroundColor: 'rgba(128, 0, 128, 0.2)',
        tension: 0.4,
        fill: true,
        yAxisID: 'med-axis' // Assign the dataset to a secondary y-axis
      },
      {
        label: "Total Listings vs. Months",
        data: listingArray,
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        tension: 0.4,
        fill: true
      }
    ];
    linechart.options.plugins.title.text = "Comparison of Change in Median Price and Total Listings from Jan-90 to Apr-23";
    linechart.options.scales.y = {
      'med-axis': {
        type: 'linear',
        beginAtZero: true,
        position: 'right' // Position the secondary y-axis on the right
      },
      'default': {
        type: 'linear',
        beginAtZero: true,
        position: 'left' // Position the primary y-axis on the left
      }
    };
    linechart.update();
  }
}