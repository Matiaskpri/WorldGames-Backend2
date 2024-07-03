const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/gamesController');

router.get('/', gamesController.getAllGames);
router.get('/:id', gamesController.getGameId);
router.post('/', gamesController.createGame);
router.put('/:id', gamesController.updateGame);
router.delete('/:id', gamesController.deleteGame);

module.exports = router;
