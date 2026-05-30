const barCtx = document.getElementById('barChart');

new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['PO1', 'PO2', 'PO3', 'PO4', 'PO5', 'PO6'],
        datasets: [{
            label: 'Attainment %',
            data: [82, 76, 91, 69, 74, 80],
            backgroundColor: [
                '#2564ebdd',
                '#16a34ad9',
                '#f59f0bcd',
                '#ef4444d5',
                '#8a5cf6cb',
                '#06b5d4d7'
            ]
        }]
    },

    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

const lineCtx = document.getElementById('lineChart');

new Chart(lineCtx, {
    type: 'line',

    data: {
        labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5'],
        datasets: [{
            label: 'Average PO Attainment',
            data: [60, 65, 70, 74, 76],
            borderColor: '#2563eb',
            backgroundColor: '#93c5fd',
        }]
    },

    options: {
        responsive: true //makes the chart automatically resize to fit its container when the browser window or screen size changes.
    }
});
