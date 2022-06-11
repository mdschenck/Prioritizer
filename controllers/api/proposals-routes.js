const router = require("express").Router();
const db = require("../../config/connection.js");
const Proposal = require("../../models/Proposal.js");

// router.get("/", (req, res) => {
//   const sql = `SELECT * FROM proposal`;
//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       // data: rows,
//     });
//   });
// });

router.get("/", async (req, res) => {
  try {
    Proposal.findAll().then((proposalData) => {
      res.json(proposalData);
    });
    // Get all proposals  <--- ** From Stephen's Home-routes / Serialized not needed? **
    // const proposalData = await Proposal.findAll({});
    // res.json(proposalData);

    // // Serialize data so the template can read it
    // const proposals = proposalData.map((proposal) =>
    //   proposal.get({ plain: true })
    // );
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", (req, res) => {
  const sql = `SELECT * FROM proposals WHERE id = ?`;
  const params = [req.params.id];
  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

module.exports = router;
