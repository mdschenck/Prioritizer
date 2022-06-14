const router = require("express").Router();
// const db = require("../../config/connection.js");
// const Proposal = require("../../models/Proposal.js");
// const Sequelize = require("sequelize");
const { Proposal } = require('../../models');

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
// router.post("/:proposal", (req, res) => {
//   Proposal.create({
//     proposal: req.params.proposal,
//   })
//     .then((newProposal) => {
//       // Send the newly created row as a JSON object
//       res.json(newProposal);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

router.post('/', async (req, res) => {
  try {
    const newProposal = await Proposal.create({
      ...req.body,
      // user_id: req.session.user_id,
     });

    res.status(200).json(newProposal);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/upVote/:id", (req, res) => {
  Proposal.update(
    {
      prop_votes: Sequelize.literal("Proposal.prop_votes + 1"),
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedProposal) => {
      res.json(updatedProposal);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
