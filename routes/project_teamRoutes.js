const express = require('express');
const { getAllProjectTeams } = require('../controllers/project_teamController');
const router = express.Router();

router.get('/project-teams', getAllProjectTeams);

module.exports = router;