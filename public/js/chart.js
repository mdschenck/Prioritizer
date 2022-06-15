var prop1 = document.getElementById("p1");
var prop2 = document.getElementById("p2");
var prop3 = document.getElementById("p3");
var prop4 = document.getElementById("p4");
var prop5 = document.getElementById("p5");

var propvotes1 = document.getElementById("pv1");
var propvotes2 = document.getElementById("pv2");
var propvotes3 = document.getElementById("pv3");
var propvotes4 = document.getElementById("pv4");
var propvotes5 = document.getElementById("pv5");

var prop_votes = [
//     propvotes1.textContent,
//     propvotes2.textContent,
//     propvotes3.textContent,
//     propvotes4.textContent,
//     propvotes5.textContent,
// ];
// // For drawing the lines
// var proposals = [
//     prop1.textContent,
//     prop2.textContent,
//     prop3.textContent,
//     prop4.textContent,
//     prop5.textContent,

];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {

    type: "doughnut",
    data: {
        labels: proposals,
        datasets: [{
            data: prop_votes,
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
            ],
        }, ],
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
    },
});

