const router = require("express").Router();
const Proposal = require("../models/Proposal");

// IMPORTS FOR CHART FUNCTIONS--------:
const { myChart } = require("../utils/chart.js");

// END IMPORTS FOR CHART FUNCTIONS -------

// route to get all Proposals
// router.get('/', async (req, res) => {

// const proposalData = await Proposal.findAll().catch((err) => {
//     res.json(err);
//   });
//     const proposals = proposalData.map((proposal) => proposal.get({ plain: true }));
//     res.render('homepage', { proposals });
//   });

router.get("/", async (req, res) => {
  try {
    // Get all proposal
    const proposalData = await Proposal.findAll({});

    // Serialize data so the template can read it
    const proposals = proposalData.map((proposal) =>
      proposal.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    res.render("homepage", {
      proposals,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get create proposal page
router.get("/create-proposal", (req, res) => {
  res.render("create-proposal", {
    logged_in: true,
  });
});

// Get proposals page
router.get("/proposals", (req, res) => {
  res.render("proposals", {
    logged_in: true,
  });
});

// Get votes page
router.get("/votes", (req, res) => {
  res.render("votes", {
    logged_in: true,
  });
});

router.get("/results", (req, res) => {
  res.render("results", {
    logged_in: true,
  });

  // TESTING CHART FUNCTION --
  myChart;
  // END CHARD FUNCTION --
});

module.exports = router;
