const router = require("express").Router();
const db = require("../../config/connection.js");

router.get("/votes", (req, res) => {
  const sql = `SELECT users.name AS users_name, COUNT(users_id) AS count FROM votes LEFT JOIN users ON votes.users_id = users.id LEFT JOIN proposals ON users.proposal = proposals.id`;
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

module.exports = router;
