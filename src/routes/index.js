const express = require('express');
const router = express.Router();
const {
  projectsHome,
  projectForm,
  newProject,
} = require('../controllers/projectsController');

//route to home
router.get('/', projectsHome);
router.get('/new-project', projectForm);
router.post('/new-project', newProject);

module.exports = router;
