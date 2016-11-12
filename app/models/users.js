const mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UsersSchema   = new Schema({
    name: String,
    last_name: String,
    email:String,
    age:String
},{versionKey: false});

module.exports = mongoose.model('Users', UsersSchema);