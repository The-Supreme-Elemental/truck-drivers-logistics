var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
        }]
    }
});

setInterval(function() {
    var newDataPoint = Math.floor(Math.random() * 100);
    myChart.data.datasets[0].data.push(newDataPoint);
    myChart.data.labels.push("New Label");
    myChart.update();
}, 1000);
