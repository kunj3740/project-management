const express = require('express');
const { getAllProjects, createProject } = require('../controllers/projectsController');
const router = express.Router();

router.get('/projects', getAllProjects);
router.post('/projects', createProject);

module.exports = router;