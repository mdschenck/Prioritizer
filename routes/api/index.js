const router = require('express').Router();
const votesRoutes = require('./votes-routes');
const proposalsRoutes = require('./proposals-routes');
const usersRoutes = require('./users-routes');

router.use('/votes', votesRoutes);
router.use('/proposals', proposalsRoutes);
router.use('/users', usersRoutes);

module.exports = router;
