const router = require("express").Router();
const Sequelize = require("sequelize");
const db = require("../../config/connection.js");
const Vote = require("../../models/Vote.js");

router.get("/", async (req, res) => {
  try {
    Vote.findAll().then((voteData) => {
      res.json(voteData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one proposal by its `id` value
router.get("/:id", (req, res) => {
  try {
    Vote.findOne({
      where: {
        id: req.params.id,
      },
    }).then((voteData) => {
      res.json(voteData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new proposal
router.post("/:vote", (req, res) => {
  Vote.create({
    vote: req.params.vote,
  })
    .then((newVote) => {
      // Send the newly created row as a JSON object
      res.json(newVote);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/startVote/:id", (req, res) => {
  // update a vote with vote start time, by its `id` value
  Vote.update(
    {
      start_time: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedVote) => {
      // Sends the updated category as a json response
      res.json(updatedVote);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
