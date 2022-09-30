const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const {
  projectsHome,
  projectForm,
  newProject,
} = require('../controllers/projectsController');

//route to home
router.get('/', projectsHome);
router.get('/new-project', projectForm);
router.post(
  '/new-project',
  body('name').not().isEmpty().trim().escape(),
  newProject
);

module.exports = router;
