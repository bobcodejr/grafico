const ctx = document.getElementById('chart');

const data = {
    labels: ['Red', 'Green', 'Blue', 'Orange'],
    datasets: [
      {
        label: 'Titulo',
        data: [01, 02, 03, 04, 05, 06, 07, 08, 09],
        borderColor: Utils.CHART_COLORS.red,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red),
        fill: false
      }
    ]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      plugins: {
        filler: {
          propagate: false,
        },
        title: {
          display: true,
          text: (ctx) => 'Fill: ' + ctx.chart.data.datasets[0].fill
        }
      },
      interaction: {
        intersect: false,
      }
    },
  };

const myChart = new Chart(ctx, config)