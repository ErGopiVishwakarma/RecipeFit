const express = require('express');
const { isAuthenticated } = require('../middlewares/authMiddleware');
const { register, login, getUsers, updateUser, deleteUser, logout, fetchRecipes } = require('../controllers/userController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/', getUsers);
router.patch('/update/:userId', updateUser);
router.delete('/delete/:userId', deleteUser);
router.get('/fetchRecipes/:userId', fetchRecipes);
router.post('/logout', logout);

module.exports = router;