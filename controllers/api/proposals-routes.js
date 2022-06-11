const router = require("express").Router();
const db = require("../../config/connection.js");
const Proposal = require("../../models/Proposal.js");

router.get("/", async (req, res) => {
  try {
    Proposal.findAll().then((proposalData) => {
      res.json(proposalData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one proposal by its `id` value
router.get("/:id", (req, res) => {
  try {
    Proposal.findOne({
      where: {
        id: req.params.id,
      },
    }).then((proposalData) => {
      res.json(proposalData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new proposal
router.post("/:proposal", (req, res) => {
  Proposal.create({
    proposal: req.params.proposal,
  })
    .then((newProposal) => {
      // Send the newly created row as a JSON object
      res.json(newProposal);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
