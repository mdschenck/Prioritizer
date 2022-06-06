const router = require('express').Router();
const db = require('../config/connection.js'); 

router.get('/proposals', (req, res) => {
  const sql = `SELECT * FROM proposals`;
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});


router.get('/proposal/:id', (req, res) => {
  const sql = `SELECT * FROM proposals WHERE id = ?`;
  const params = [req.params.id];
  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: row
    });
  });
});



module.exports = router;