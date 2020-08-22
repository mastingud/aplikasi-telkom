// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
$(document).ready(function () {
  var SERVER_URL = "http://localhost:3000/TopCat";
  $.get(SERVER_URL, function (kategoriprojek) {
    if (kategoriprojek !== null) {
      var jenis_kategori = kategoriprojek.map(function (rec) {
        return rec.jenis_kategori;
      });
      var total_umkm = kategoriprojek.map(function (rec) {
        return rec.total_umkm;
      });
      var total_nilai = kategoriprojek.map(function (rec) {
        return rec.total_nilai;
      });

      var ctx = document.getElementById("BarKategoriChart");
      var myKatBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: jenis_kategori,
            datasets: [{
                label: "Top Category Project",
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                backgroundColor: "#4169E1",
                data: total_nilai,
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