const express = require('express');
const router = express.Router();
const { projectsHome } = require('../controllers/projectsController');

//route to home
router.get('/', projectsHome);
router.get('/test', (req, res) => {
  res.render('test');
});

module.exports = router;
