const Projects = require('../models/Projects');

const projectsHome = (req, res) => {
  res.render('index', {
    namePage: 'Projects',
  });
};

const projectForm = (req, res) => {
  res.render('newProject', {
    namePage: 'New Project',
  });
};

const newProject = async (req, res) => {
  const { name } = req.body;

  let errors = [];

  if (!name) {
    errors.push({ text: 'Add a name to the project' });
  }

  if (errors.length > 0) {
    res.render('newProject', {
      namePage: 'New Project',
      errors,
    });
  } else {
    try {
      const project = await Projects.create({ name });
      console.log('Project inserted successfully');
      res.redirect('/');
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = {
  projectsHome,
  projectForm,
  newProject,
};
