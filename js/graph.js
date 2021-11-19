// graph

var xmlhttp = new XMLHttpRequest();
var url = "http://127.0.0.1:5500/js/data.json";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var data = JSON.parse(this.responseText);
    //console.log(data);
    var days = data.november_calories.map(function(elem){
      return elem.date;
    });
    //console.log(days)
    var calories = data.november_calories.map(function(elem){
      return elem.calories;
    });

    const ctx = document.getElementById('canvas').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: days,
            datasets: [{
                label: 'Calories per Day',
                data: calories,
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
  }
}

