const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        thoughts: [],
        friends: []
    }
)

const User = model('User', UserSchema);

module.exports = User;