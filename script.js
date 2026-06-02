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
const math1 = [82,76,91,69,74,80];
const physics1 = [70,85,88,75,80,90];
const spm1 = [88,92,90,84,95,91];

const math2 = [75,70,82,68,73,79];
const physics2 = [81,78,90,74,80,86];
const spm2 = [90,93,89,84,95,91];

let chart = new Chart(
    document.getElementById("poChart"),
    {
        type: "bar",
        data: {
            labels: ["PO1","PO2","PO3","PO4","PO5","PO6"],
            datasets: [{
                label: "PO Attainment (%)",
                data: math1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }
);

function updateChart(){

    let sem = document.getElementById("semester").value;
    let sub = document.getElementById("subject").value;
    let type = document.getElementById("chartType").value;

    let values = math1;

    if(sem == "Semester 1" && sub == "Applied Mathematics I"){
        values = math1;
    }

    if(sem == "Semester 1" && sub == "Engineering Physics"){
        values = physics1;
    }

    if(sem == "Semester 1" && sub == "Structured Programming Methodology"){
        values = spm1;
    }

    if(sem == "Semester 2" && sub == "Applied Mathematics I"){
        values = math2;
    }

    if(sem == "Semester 2" && sub == "Engineering Physics"){
        values = physics2;
    }

    if(sem == "Semester 2" && sub == "Structured Programming Methodology"){
        values = spm2;
    }

    chart.destroy();

    chart = new Chart(
        document.getElementById("poChart"),
        {
            type: type,
            data: {
                labels: ["PO1","PO2","PO3","PO4","PO5","PO6"],
                datasets: [{
                    label: "PO Attainment (%)",
                    data: values
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    );
}