const router = require('express').Router();

// Define users endpoint and load users controller
router.use('/users', require('./users'))

// api root endpoint
router.get('/', function(req, res) {
    res.json({ message: 'hey! welcome to our simple express api!' });
});


module.exports = router;