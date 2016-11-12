const router = require('express').Router();

// define users object from users model
var Users     = require('../models/users');

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router
.get('/',function(req, res) {

    Users.find({},function(err, data) {
        if (err)
            res.send(err);

        res.json(data);
    });

})

.get('/:email',function(req, res) {

    Users.find({ email: req.params.email }, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });

})

.post('/',function(req, res) {

    var users = new Users();      // create a new instance of the Users model
        users.name         = req.body.name;  // set the name (comes from the request)
        users.last_name    = req.body.last_name;  // set the last_name (comes from the request)
        users.email        = req.body.email;  // set the email (comes from the request)
        users.age          = req.body.age;  // set the age (comes from the request)

    // save the user and check for errors
    users.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'user created!' });
    });

})

.put('/:email',function(req, res) {

    Users.findOne({ email: req.params.email }, function(err, users) {

        if (err)
            res.send(err);

        console.log(users);

        users.name = req.body.name;  // update the users info

        // save the bear
        users.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User updated!' });
        });

    });
})

.delete('/:email',function(req, res) {
    Users.remove({ email: req.params.email }, function(err, users) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
});



module.exports = router