// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
$(document).ready(function () {
  var SERVER_URL = "http://localhost:3000/seller";
  $.get(SERVER_URL, function (topseller) {
    if (topseller !== null) {
      var jumlah = topseller.map(function (rec) {
        return rec.jumlah;
      });
      var nama_seller = topseller.map(function (rec) {
        return rec.nama_seller;
      });

      var ctx = document.getElementById("BarChart");
var myBarChart = new Chart(ctx, {
    type: "horizontalBar",
    data: {
        labels: nama_seller,
        datasets: [{
            label: "TOP 10 SELLER by PROJECT VALUE",
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: ["#4169E1", "navy", "#4169E1", "navy", "#4169E1", "navy", "#4169E1", "#navy", "#4169E1", "#navy"],
            data: jumlah
        }]
    },
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    offsetGridLines: true
                }
            }]
        }
    },
});
}
});
});