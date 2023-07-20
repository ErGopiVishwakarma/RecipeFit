const jwt = require('jsonwebtoken');
const TokenBlacklist = require('../models/tokenBlacklist');

require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET;
// const refreshSecret = process.env.REFRESH_SECRET;

module.exports.isAuthenticated = async (req, res, next) => {

  const token = req.headers.authorization?.split(' ')[1];

  if(!token){
    res.status(401).send({ error: 'Missing access token' });
    return;
  }

  try{
    const isBlacklisted = await TokenBlacklist.exists({ token });

    if (isBlacklisted) {
      res.status(401).send({ error: 'Authentication failed' });
      return;
    }

    jwt.verify(token, jwtSecret, (err, userId) => {
      if(err){
        res.status(401).send({ error: 'Invalid access token' });
        return;
      }

      req.userId = userId;
      next();
    });
  }
  catch(err){
    res.status(500).send({ error: 'Failed to authenticate access token' });
  }
}