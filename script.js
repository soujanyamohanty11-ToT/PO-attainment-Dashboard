let dashboardData =
JSON.parse(localStorage.getItem("dashboardData"));

if(dashboardData == null){
    dashboardData = [82,76,91,69,74,80];
}




const barCtx = document.getElementById('barChart');

let barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['PO1', 'PO2', 'PO3', 'PO4', 'PO5', 'PO6'],
        datasets: [{
            label: 'Attainment %',
            data: dashboardData,
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

 let lineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['Sem 1','Sem 2','Sem 3','Sem 4','Sem 5'],
        datasets: [{
            label: 'Average PO Attainment',
            data: [60,65,70,74,76],
            borderColor: '#2563eb',
            backgroundColor: '#93c5fd'
        }]
    },
    options: {
        responsive: true
    }
});






const math1 = [82,76,91,69,74,80];
const physics1 = [70,85,88,75,80,90];
const spm1 = [88,92,90,84,95,91];

const math2 = [75,70,82,68,73,79];
const physics2 = [81,78,90,74,80,86];
const spm2 = [90,93,89,84,95,91];

let chart = null;

if(document.getElementById("poChart")){

    chart = new Chart(
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

}

function updateChart(){

      

    let sem = document.getElementById("semester").value;
    let sub = document.getElementById("subject").value;
   
   localStorage.setItem("selectedSemester", sem);
   localStorage.setItem("selectedSubject", sub);
   
    let chartTypeElement = document.getElementById("chartType");

let type = "bar";

if(chartTypeElement){
    type = chartTypeElement.value;
}




    let values = math1;

    let poNames = ["PO1","PO2","PO3","PO4","PO5","PO6"];


    if(sem == "Semester 1" && sub == "Applied Mathematics I"){
        values = math1;

        poNames = [
        "Matrices",
        "Partial Differentiation",
        "Homogeneous Functions",
        "Linear Differential Equations",
        "Probability",
        "Complex Numbers"
    ];
    }

    if(sem == "Semester 1" && sub == "Engineering Physics"){
        values = physics1;
        poNames = [
        "Magnetism",
        "Wave Optics",
        "Photonics",
        "Quantum-Mechanics",
        "Electrodynamics",
        "Photonics"
        
    ];

    }

    if(sem == "Semester 1" && sub == "Structured Programming Methodology"){
        values = spm1;

        poNames = [
        "Introduction to C",
        "Variables",
        "Unions",
        "Arrays and Structures",
        "Memory Allocations"
        
    ];
    }

    if(sem == "Semester 2" && sub == "Applied Mathematics I"){
        values = math2;
         poNames = [
        "Integrals",
        "Differential Equations",
        "Series",
        "Vectors",
        "Transforms"
        
    ];
    }

    if(sem == "Semester 2" && sub == "Engineering Physics"){
        values = physics2;
    }

    if(sem == "Semester 2" && sub == "Structured Programming Methodology"){
        values = spm2;
    }

  // Average
let sum = 0;

for(let i = 0; i < values.length; i++){
    sum += values[i];
}

let average = (sum / values.length).toFixed(1);

// Highest PO
let highestIndex = 0;

for(let i = 1; i < values.length; i++){
    if(values[i] > values[highestIndex]){
        highestIndex = i;
    }
}

// Weakest PO
let weakestIndex = 0;

for(let i = 1; i < values.length; i++){
    if(values[i] < values[weakestIndex]){
        weakestIndex = i;
    }
}

// Saving all the values
localStorage.setItem("averagePO", average + "%");

localStorage.setItem(
    "highestPO",
    poNames[highestIndex] + " (" + values[highestIndex] + "%)"
);

localStorage.setItem(
    "weakestPO",
    poNames[weakestIndex] + " (" + values[weakestIndex] + "%)"
);

// Updating the cards on Dashboard 
document.getElementById("averagePO").innerHTML = average + "%";
 
document.getElementById("highestPO").innerHTML =
poNames[highestIndex] + " (" + values[highestIndex] + "%)";

document.getElementById("weakestPO").innerHTML =
poNames[weakestIndex] + " (" + values[weakestIndex] + "%)";


   
    localStorage.setItem(
    "dashboardData",
    JSON.stringify(values)
);


// Updating colorful bar graph
barChart.data.datasets[0].data = values;
barChart.update();

// Updating line graph
lineChart.data.datasets[0].data = values;
lineChart.update();






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


