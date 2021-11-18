// graph



const ctx = document.getElementById('canvas').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Nov 1','Nov 2','3','4','5','6'],
        datasets: [{
            label: 'Calories per Day',
            data: [12, 11, 3, 5, 2, 3],
            backgroundColor: 'transparent',
            borderColor: 'red',
            borderWidth: 4
        }]
    },
    options: {
      element:{
        line:{
          tension:0
        }
      },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});