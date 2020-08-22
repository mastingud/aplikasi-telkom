// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
$(document).ready(function () {
  var SERVER_URL = "http://localhost:3000/";
  $.get(SERVER_URL, function (trennilaiproyek) {
    if (trennilaiproyek !== null) {
      var tahun_proyek = trennilaiproyek.map(function (rec) {
        return rec.tahun_proyek;
      });
      var pendapatan_BUMN = trennilaiproyek.map(function (rec) {
        return rec.pendapatan_BUMN;
      });

      var ctx = document.getElementById("areaChart");
      var myLineChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: tahun_proyek,
          datasets: [
            {
              label: "Tahun Proyek",
              lineTension: 0.3,
              backgroundColor: "rgba(2,117,216,0.2)",
              borderColor: "rgba(2,117,216,1)",
              pointRadius: 5,
              pointBackgroundColor: "rgba(2,117,216,1)",
              pointBorderColor: "rgba(255,255,255,0.8)",
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(2,117,216,1)",
              pointHitRadius: 50,
              pointBorderWidth: 2,
              data: pendapatan_BUMN,
            },
          ],
        },
        options: {
          scales: {
            xAxes: [
              {
                time: {
                  unit: "date",
                },
                gridLines: {
                  display: false,
                },
                ticks: {
                  maxTicksLimit: 7,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  min: 0,
                  max: 400000000,
                  maxTicksLimit: 5,
                },
                gridLines: {
                  color: "rgba(0, 0, 0, .125)",
                },
              },
            ],
          },
          legend: {
            display: false,
          },
        },
      });
    }
  });
});
