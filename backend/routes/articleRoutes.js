const express = require('express');
const { createArticle, getArticles, getArticleById, updateArticle } = require('../controllers/articleController');
const router = express.Router();

router.post('/addArticle', createArticle);
router.get('/', getArticles);
router.patch('/update/:articleId', updateArticle);
// router.delete('/delete/:articleId', deleteArticle);
router.get('/:articleId', getArticleById);

module.exports = router;