var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://vaibhav:vaibhav13@ds149344.mlab.com:49344/workdb' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
