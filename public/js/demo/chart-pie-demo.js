// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var infected = 1
var release = 2
var die = 1

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
function pie_chart(infected,release,die) {
  var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['확진자','확진자 격리 취소','사망자'],
      datasets: [{
        data: [infected, release, die],
        backgroundColor: ['#f6c23e', '#1cc88a', '#e74a3b'],
        hoverBackgroundColor: ['#f6c23e', '#17a673', '#e74a3b'],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      }],
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80,
    },
  });
}

pie_chart(infected,release,die)