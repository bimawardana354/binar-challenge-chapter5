const router = require('express').Router();

router.get('/login', require('./login'));
router.post('/login', require('./login'));
router.get('/', require('./landingPage.js'));
router.get('/game', require('./game.js'));
router.get('/user', require('./listUserPage.js'));

module.exports = router;
