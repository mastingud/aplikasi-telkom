Highcharts.getJSON(
  "https://tes.heriirawan.site/indonesia.json",
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
        text: "Zoom in on country by double click",
      },

      mapNavigation: {
        enabled: true,
        enableDoubleClickZoomTo: true,
      },

      colorAxis: {
        min: 1,
        max: 1000,
        type: "logarithmic",
      },

      series: [
        {
          data: data,
          joinBy: ["hc-key"],
          name: "Population density",
          states: {
            hover: {
              color: "#a4edba",
            },
          },
          tooltip: {
            valueSuffix: "orang",
          },
        },
      ],
    });
  }
);
