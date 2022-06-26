const router = require("express").Router();
const Proposal = require("../models/Proposal");
const withAuth = require("../utils/auth");

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
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get create proposal page
router.get("/create-proposal", withAuth, (req, res) => {
  res.render("create-proposal", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/proposals", async (req, res) => {
  try {
    // Get all proposal
    const proposalData = await Proposal.findAll({});

    // Serialize data so the template can read it
    const proposals = proposalData.map((proposal) =>
      proposal.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    res.render("proposals", {
      proposals,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get votes page
router.get("/votes", withAuth, async (req, res) => {
  try {
    // Get all proposal
    const proposalData = await Proposal.findAll({});
    const voteData = await Vote.findAll({});

    // ***ATTEMPTING TO COMBINE THE PROPOSAL AND VOTE MODEL DATA INTO A NEW OBJECT -- This isn't working...

    // Serialize data so the template can read it

    const proposals = proposalData.map((proposal) =>
      proposal.get({ plain: true })
    );

    const votes = voteData.map((vote) => vote.get({ plain: true }));

    // COMBINE MAPPED OBJECTS INTO NEW OBJECT?? **This ALSO does not work... 
    // const pvCombine = Object.fromEntries(proposalData, voteData);

    // const pvdata = pvCombine.map((pvdata) => pvdata.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("votes", {
      // pvdata,
        proposals,
      // votes,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/results", withAuth, async (req, res) => {
  try {
    // Get all proposal
    const proposalData = await Proposal.findAll({});

    // Serialize data so the template can read it
    const proposals = proposalData.map((proposal) =>
      proposal.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    res.render("results", {
      proposals,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;
