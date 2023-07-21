const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const TokenBlacklist = require('../models/tokenBlacklist');

require('dotenv').config();

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET;
const tokenExpiration = process.env.TOKEN_EXPIRATION;


// ------------------------------------ CREATE USER ----------------------------------------
module.exports.register = async (req, res) => {
  try{
      const { username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      let existingUser = await User.find({email: email});

      if(existingUser){
        res.status(409).send({ message: "User already registered by the same email" });
        return;
      }

      const user = await User.create({ 
          username: username,
          email: email,
          password: hashedPassword
      });
  
      res.status(201).send({ message: 'User registered successfully', user: user });
    }
    catch(err){
      res.status(500).send({ error: 'Failed to register user' });
    }
};




// ------------------------------------ LOGIN ----------------------------------------
module.exports.login = async (req, res) => {
    const { email, password } = req.body;

    try{
      const user = await User.findOne({ email });
  
      if(!user){
        res.status(401).send({ error: 'Invalid email' });
        return;
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
      
      if(!passwordMatch){
        res.status(401).send({ error: 'Invalid password' });
        return;
      }
  
      // Generate access token
      let accessToken = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: tokenExpiration });
      
      res.status(200).json({ accessToken: accessToken, user: user });
    }
    catch(err){
      res.status(500).send({ error: 'Failed to login the user' });
    }
};




// ------------------------------------ GET ALL USERS ----------------------------------------
module.exports.getUsers = async (req, res) => {
    try {
      const users = await User.find();

      res.status(200).send(users);
    }
    catch (err) {
      res.status(500).send({ error: 'Failed to retrieve the users' });
    }
};





// ------------------------------------ UPDATE USER ----------------------------------------
module.exports.updateUser = async (req, res) => {
    try {
      const { userId } = req.params;

      const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });

      if(!updatedUser){
        res.status(404).send({ message: "User not found" });
        return;
      }

      res.status(200).send({ message: 'User updated successfully', user: updatedUser });
    }
    catch (err) {
      res.status(500).send({ error: 'Failed to update the user' });
    }
};




// ------------------------------------ DELETE USER ----------------------------------------
module.exports.deleteUser = async (req, res) => {
    try {
      const { userId } = req.params;

      const deletedUser = await User.findByIdAndDelete(userId);

      if(!deletedUser){
        res.status(404).send({ message: "User not found" });
        return;
      }

      res.status(200).send({ message: 'User deleted successfully', user: deletedUser });
    }
    catch (err) {
      res.status(500).send({ error: 'Failed to delete the user' });
    }
};




// ------------------------------------ POPULATE RECIPES BY USER ID ----------------------------------------
module.exports.fetchRecipes = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).populate('recipes');

    res.status(200).send(user.recipes);
  }
  catch (err) {
    res.status(500).send({ error: 'Failed to fetch the recipes' });
  }
};



// ------------------------------------ LOGOUT ----------------------------------------
module.exports.logout = async (req, res) => {
    const accessToken = req.headers.authorization?.split(' ')[1];

  try{
    const isTokenBlackListed = await TokenBlacklist.findOne({ token: accessToken });

    if(isTokenBlackListed){
      res.status(400).send({ message: 'User has been already logged out' });
      return;
    }

    const tokenBlacklist = new TokenBlacklist({ token: accessToken });
    await tokenBlacklist.save();

    res.status(200).send({ message: 'User logged out successfully' });
  }
  catch(err){
    res.status(500).send({ error: 'Failed to logout the user' });
  }
};