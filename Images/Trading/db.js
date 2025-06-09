function showContent(contentId) {
    // Hide all content sections first
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // Show the selected content section
    const content = document.getElementById(contentId);
    if (content) {
        content.style.display = 'block';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('userId').textContent = "Raju";
    document.getElementById('referralId').textContent = "12345";
});


// Bar Chart Example
var barChart = new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Monthly Revenue',
            data: [5000, 4500, 3000, 3500, 4000, 3800],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Line Chart Example
var lineChart = new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Weekly Revenue',
            data: [1500, 2000, 2500, 2800],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true
        }]
    },
    options: {
        responsive: true
    }
});

// Pie Chart Example
var pieChart = new Chart(document.getElementById('pieChart'), {
    type: 'pie',
    data: {
        labels: ['Paid Subscribers', 'Demo Subscribers', 'Non-Subscribed'],
        datasets: [{
            data: [100, 50, 30],
            backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
            hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
        }]
    },
    options: {
        responsive: true
    }
});

fetchData().then(data => {
    // Example of dynamically updating the chart
    barChart.data.datasets[0].data = data.monthlyRevenue;
    barChart.update();
});

var ctxLine = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart(ctxLine, {
    type: 'line', // Line chart type
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'], // X-axis labels
        datasets: [{
            label: 'Profit Trend', // Label for the chart
            data: [1200, 1500, 1800, 2000, 2100, 2400], // Data points
            fill: false, // No fill under the line, change to true for area chart
            borderColor: 'rgba(75, 192, 192, 1)', // Line color
            pointRadius: 6, // Radius of the markers (data points)
            pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Color of the markers
            pointBorderColor: '#fff', // Border color of the markers
            pointBorderWidth: 2, // Border width of the markers
            tension: 0.1, // Smoothness of the line
            showLine: true // Ensure the line is shown
        }]
    },
    options: {
        responsive: true, // Make the chart responsive
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Months' // Label for the x-axis
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Profit (₹)' // Label for the y-axis
                }
            }
        },
        elements: {
            line: {
                tension: 0.4 // Optional: smooth curve for the line
            }
        }
    }
});

