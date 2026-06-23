let dashboardData =
JSON.parse(localStorage.getItem("dashboardData"));

if(dashboardData == null){
    dashboardData = [82,76,91,69,74,80];
}

let dashboardLabels =
JSON.parse(localStorage.getItem("dashboardLabels"));

if(dashboardLabels == null){
    dashboardLabels = ["PO1","PO2","PO3","PO4","PO5","PO6"];
}




const barCtx = document.getElementById('barChart');

let barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: dashboardLabels,
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
const spm1 = [88,92,90,84,95];

const math2 = [75,70,82,68,79];
const chemistry2 = [81,78,90,74,80,86];
const science2 = [86,82,91,84,89];
const oopm2 = [90,94,92,85,96];


  const semester1Table = [

{
    subject:"Applied Mathematics I",
    co:"78%",
    po:"79%",
    status:"Average"
},

{
    subject:"Engineering Physics",
    co:"82%",
    po:"81%",
    status:"Good"
},

{
    subject:"Structured Programming Methodology",
    co:"61%",
    po:"90%",
    status:"Excellent"
}

];

const semester2Table = [

{
    subject:"Applied Mathematics II",
    co:"84%",
    po:"75%",
    status:"Average"
},

{
    subject:"Engineering Chemistry",
    co:"81%",
    po:"82%",
    status:"Good"
},

{
    subject:"Applied Science for Computer Allied Subjects",
    co:"87%",
    po:"86%",
    status:"Good"
},

{
    subject:"Object Oriented Programming Methodology",
    co:"90%",
    po:"91%",
    status:"Excellent"
}

];





let chart = null;

if(document.getElementById("poChart")){

    chart = new Chart(
        document.getElementById("poChart"),
        {
            type: "bar",
            data: {
               labels: poNames,
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

   updateSubjectTable(sem);
   
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
        "Partial Diff",
        "Homo Fun",
        "Linear DE",
        "Probability",
        "Complex Num"
    ];
    }

    if(sem == "Semester 1" && sub == "Engineering Physics"){
        values = physics1;
        poNames = [
        "Magnetism",
        "Wave Optics",
        "Photonics",
        "Quant-Mech",
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
        "Arrays & Struct",
        "Memory Allocations"
        
    ];
    }

    if(sem == "Semester 2" && sub == "Applied Mathematics II"){

    values = math2;

    poNames = [
        "Integrals",
        "DE",
        "Series",
        "Vectors",
        "Transforms"
        
    ];
}

if(sem == "Semester 2" && sub == "Engineering Chemistry"){

    values = chemistry2;

    poNames = [
        "Water Treatment",
        "Green Chemistry",
        "Organic Reactions",
        "Electrochemistry",
        "Sensors"
        
    ];
}

if(sem == "Semester 2" && sub == "Applied Science for Computer Allied Subjects"){

    values = science2;

    poNames = [
        "Transistors",
        "Wave Equations",
        "Corrosion",
        "Batteries",
        "Semiconductors"
        
    ];
}

if(sem == "Semester 2" && sub == "Object Oriented Programming Methodology"){

    values = oopm2;

    poNames = [
        "Classes",
        "Objects",
        "Inheritance",
        "Polymorphism",
        "Exception Handling"
    ];
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

localStorage.setItem(
    "dashboardLabels",
    JSON.stringify(poNames)
);


// Updating colorful bar graph
barChart.data.labels = poNames;
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
            labels: poNames,

            datasets: [{
                label: "PO Attainment (%)",
                data: values,

                backgroundColor: [
                    "#2564ebdd",
                    "#16a34ad9",
                    "#f59f0bcd",
                    "#ef4444d5",
                    "#8a5cf6cb",
                    "#06b5d4d7"
                ],

                borderColor: [
                    "#2564ebdd",
                    "#16a34ad9",
                    "#f59f0bcd",
                    "#ef4444d5",
                    "#8a5cf6cb",
                    "#06b5d4d7"
                ],

                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }
);
updateSubjectTable(sem);
}


function updateSubjectList(){

    let sem = document.getElementById("semester").value;
    let subject = document.getElementById("subject");

    subject.innerHTML = "";

    if(sem == "Semester 1"){

        subject.innerHTML += "<option>Applied Mathematics I</option>";
        subject.innerHTML += "<option>Engineering Physics</option>";
        subject.innerHTML += "<option>Structured Programming Methodology</option>";

    }

    else{

        subject.innerHTML += "<option>Applied Mathematics II</option>";
        subject.innerHTML += "<option>Engineering Chemistry</option>";
        subject.innerHTML += "<option>Applied Science for Computer Allied Subjects</option>";
        subject.innerHTML += "<option>Object Oriented Programming Methodology</option>";

    }

}


function updateSubjectTable(sem){

    let data;

    if(sem == "Semester 1"){
        data = semester1Table;
    }
    else{
        data = semester2Table;
    }

    let tbody = document.getElementById("subjectTableBody");

    tbody.innerHTML = "";

    data.forEach(function(item){

        tbody.innerHTML += `
        <tr>
            <td>${item.subject}</td>
            <td>${item.co}</td>
            <td>${item.po}</td>
            <td>${item.status}</td>
        </tr>
        `;

    });

}

window.onload = function(){

    let sem = localStorage.getItem("selectedSemester");

    if(sem == null){
        sem = "Semester 1";
    }

    updateSubjectTable(sem);

};
updateSubjectTable("Semester 1");


function updateRecommendations(){

    let poNames =
    JSON.parse(localStorage.getItem("dashboardLabels"));

    let poValues =
    JSON.parse(localStorage.getItem("dashboardData"));

    let container =
    document.getElementById("recommendationList");

    if(!container) return;

    container.innerHTML = "";

    for(let i=0;i<poValues.length;i++){

        let icon = "fa-circle-info";
        let iconClass = "info";
        let text = "";

        if(poValues[i] < 70){

            icon = "fa-triangle-exclamation";
            iconClass = "danger";

            text =
            poNames[i] +
            " attainment is below target (" +
            poValues[i] +
            "%). Focus on improving this topic.";
        }

        else if(poValues[i] >= 90){

            icon = "fa-circle-check";
            iconClass = "success";

            text =
            poNames[i] +
            " shows excellent attainment (" +
            poValues[i] +
            "%). Maintain current strategy.";
        }

        else{

            icon = "fa-circle-info";
            iconClass = "warning";

            text =
            poNames[i] +
            " has satisfactory attainment (" +
            poValues[i] +
            "%). Continue monitoring.";
        }

        container.innerHTML += `
        <div class="recommend-card">
            <i class="fa-solid ${icon} recommend-icon ${iconClass}"></i>
            <span>${text}</span>
        </div>`;
    }
}
