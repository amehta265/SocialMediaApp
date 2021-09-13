const { model, Schema } = require('mongoose');

// This schema is a model for all the users on our app.

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String
});

module.exports = model('User', userSchema);
