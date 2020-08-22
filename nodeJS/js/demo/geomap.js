Highcharts.getJSON(
  "http://localhost:8080/indonesia.json",
  function (data) {
    // Prevent logarithmic errors in color calulcation
    data.forEach(function (p) {
      p.value = p.value < 1 ? 1 : p.value;
    });

    // Initiate the chart
    Highcharts.mapChart("container", {
      chart: {
        map: "countries/id/id-all",
      },

      title: {
        text: "Peta User Peduli Lindungi per Provinsi",
      },

      mapNavigation: {
        enabled: true,
        enableDoubleClickZoomTo: true,
      },

      colorAxis: {
        min: 1,
        max: 100000,
        type: "logarithmic",
      },

      series: [
        {
          data: data,
          joinBy: ["hc-key"],
          name: "Total User",
          states: {
            hover: {
              color: "#EE4C7C",
            },
          },
          tooltip: {
            valueSuffix: " Pengguna",
          },
        },
      ],
    });
  }
);
