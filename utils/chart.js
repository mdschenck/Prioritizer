// const Proposal = require("../../models/Proposal.js");
// const Sequelize = require("sequelize");

// router.get("/", async (req, res) => {
//   try {
//     Proposal.findAll().then((proposalData) => {
//       res.json(proposalData);
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

var prop_votes = [2, 1, 7, 3];
// For drawing the lines
var proposals = ["Paint House", "Mow Lawn", "Rake Yard", "Go Fishing"];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: proposals,
    datasets: [
      {
        data: prop_votes,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

// module.exports = myChart;
