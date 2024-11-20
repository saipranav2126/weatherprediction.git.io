<script>
// Create the chart
var ctx = document.getElementById('temperatureChart').getContext('2d');
var temperatureChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1980', '1990', '2000', '2010', '2020'], // Years
        datasets: [{
            label: 'Global Average Temperature (°C)',
            data: [14.0, 14.3, 14.6, 14.9, 15.2], // Example data: average global temperature for each decade
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
        },
        {
            label: 'Extreme Weather Events (Count)',
            data: [10, 12, 15, 18, 22], // Example data: count of extreme weather events (storms, floods, hurricanes)
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: false,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
</script>