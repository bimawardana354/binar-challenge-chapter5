const router = require('express').Router();

// ini route untuk API
router.get('/', require('./listUser'));
router.get('/:id', require('./detailUser'));

module.exports = router;
