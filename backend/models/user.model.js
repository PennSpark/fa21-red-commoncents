const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    school: {
        type: String,
        required: false,
    },
    major: {
        type: String,
        required: false,
    },
    gradYear: {
        type: Number,
        required: false,
    },
    coins: {
        type: Number,
        required: true,
        default: 0
    }
});
  
const User = mongoose.model('User', userSchema);

module.exports = User;