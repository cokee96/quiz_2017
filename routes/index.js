var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

/* GET ayuda page. */
router.get('/help', function(req, res, next) {
    res.render('help');
});

// Pagina de creditos
router.get('/author', function(req, res, next) {
    res.render('author');
});

module.exports = router;
