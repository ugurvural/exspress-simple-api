// Bring in our dependencies
const app        = require('express')();
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');

// Connect to mongodb
mongoose.connect('mongodb://localhost:27017/localmemory');

// Define port
const PORT = process.env.PORT || 3000;

// Configure body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//  Connect all routes to application
const router = require('./app/controllers');

// Router will work under /api path
app.use('/api', router);

// Turn on that server!
app.listen(PORT, function() {
    console.log('Listening on port ' + PORT)
})
