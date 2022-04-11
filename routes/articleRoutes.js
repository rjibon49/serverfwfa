const express = require("express");
const router = express.Router();
const Article = require('../models/ArticleModel')

router.get('/article', async(req, res) => {

    try {
        const article = await Article.find({})
        res.send(article);
    } catch(error) {
        return res.status(400).json({ messgae: error})
    }
    
});

router.post('/article', async(req, res) => {
    const addArticle = req.body;

    try{
        const newArticle = new Article({
            ArticleName: addArticle.ArticleName,
            image: addArticle.image,
            undefined: addArticle.undefined,
        })
        await newArticle.save()
        res.send('New Article Added')
    } catch(error) {
        return res.status(400).json({ messgae: error})
    }
    
});