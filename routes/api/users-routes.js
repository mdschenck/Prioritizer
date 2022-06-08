const router = require('express').Router();
const db = require('../config/connection.js'); 

router.get('/users', (req, res) => {
  const sql = `select users.id, users.name`;

  db.query(sql, (err, rows) => {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json({
          message: 'success',
          data: rows,
      });
  });
});

router.get('/user/:id', (req, res) => {
  const sql = `select users.id,users.name WHERE users.id = ?`;
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