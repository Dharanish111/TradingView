const ctx = document.getElementById('candlestickChart').getContext('2d');

// Sample data: open, high, low, close for each day
const data = [
  { t: '2023-03-01', o: 150, h: 160, l: 145, c: 155 },
  { t: '2023-03-02', o: 155, h: 165, l: 150, c: 160 },
  { t: '2023-03-03', o: 160, h: 170, l: 155, c: 165 },
  { t: '2023-03-04', o: 165, h: 175, l: 160, c: 170 },
  { t: '2023-03-05', o: 170, h: 180, l: 165, c: 175 },
  { t: '2023-03-06', o: 175, h: 185, l: 170, c: 180 },
];

// Chart.js candlestick chart setup
const chart = new Chart(ctx, {
  type: 'candlestick',
  data: {
    datasets: [{
      label: 'Candlestick Chart',
      data: data.map(d => ({
        x: new Date(d.t).getTime(),
        o: d.o,
        h: d.h,
        l: d.l,
        c: d.c
      })),
      borderColor: '#000',
      borderWidth: 1,
      backgroundColor: (context) => {
        const { o, c } = context.raw;
        return c > o ? 'rgba(0, 255, 0, 0.5)' : 'rgba(255, 0, 0, 0.5)';
      }
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          tooltipFormat: 'll',
        },
        title: {
          display: true,
          text: 'Date'
        },
      },
      y: {
        ticks: {
          callback: function(value) {
            return '$' + value;
          },
        },
        title: {
          display: true,
          text: 'Price'
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            const o = tooltipItem.raw.o;
            const h = tooltipItem.raw.h;
            const l = tooltipItem.raw.l;
            const c = tooltipItem.raw.c;
            return [
              `Open: $${o}`,
              `High: $${h}`,
              `Low: $${l}`,
              `Close: $${c}`
            ];
          }
        }
      }
    }
  }
});
