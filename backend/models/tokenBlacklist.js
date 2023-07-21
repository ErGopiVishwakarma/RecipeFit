const mongoose = require('mongoose');

const tokenBlacklistSchema = new mongoose.Schema({
  token: String
}, {
  versionKey: false
});

const TokenBlacklist = mongoose.model('tokenBlacklist', tokenBlacklistSchema);
module.exports = TokenBlacklist;