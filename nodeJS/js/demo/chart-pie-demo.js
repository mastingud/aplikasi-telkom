// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
$(document).ready(function () {
  var SERVER_URL = "http://localhost:3000/budget";
  $.get(SERVER_URL, function (sumberbudget) {
    if (sumberbudget !== null) {
      var Pendapatan = sumberbudget.map(function (rec) {
        return rec.Pendapatan;
      });
      var Nama_perusahaan = sumberbudget.map(function (rec) {
        return rec.Nama_perusahaan;
      });

      var ctx = document.getElementById("PieareaChart");
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: Nama_perusahaan, 
        datasets : [{
            data: Pendapatan,
            backgroundColor: ["#6495ED", "#1E90FF"],
        }]
    }
});
}
});
});