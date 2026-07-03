const User = require("../models/user.model.js");

function findById(userId) {
    return User.findById(userId);
}

function findByEmail(email) {
    return User.findOne({ email });
}

function createUser(userData) {
    return User.create(userData);
}

function setRefreshToken(userId, refreshToken) {
    return User.updateOne({ _id: userId }, { $set: { refreshToken } });
}

function clearRefreshToken(userId) {
    return User.updateOne({ _id: userId }, { $set: { refreshToken: null } });
}


module.exports = {
    findById,
    createUser,
    findByEmail,
    setRefreshToken,
    clearRefreshToken,
};
