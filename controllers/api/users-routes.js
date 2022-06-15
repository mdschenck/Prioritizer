const router = require("express").Router();
const Sequelize = require("sequelize");
const db = require("../../config/connection.js");
const User = require("../../models/User.js");

// Get all users
router.get("/", async (req, res) => {
  try {
    User.findAll().then((userData) => {
      res.json(userData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one user by its `id` value
router.get("/:id", (req, res) => {
  try {
    User.findOne({
      where: {
        id: req.params.id,
      },
    }).then((userData) => {
      res.json(userData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new user
router.post("/:name", (req, res) => {
  User.create({
    name: req.params.name,
  })
    .then((newUser) => {
      // Send the newly created row as a JSON object
      res.json(newUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

// // update a user's vote count -1 when vote is cast / by user `id` value
// router.put("/castVote/:id", (req, res) => {
//   User.update(
//     {
//       votes_remaining: Sequelize.literal("User.votes_remaining - 1"),
//     },
//     {
//       where: {
//         id: req.params.id,
//       },
//     }
//   )
//     .then((updatedUser) => {
//       res.json(updatedUser);
//     })
//     .catch((err) => res.json(err));
// });

module.exports = router;
