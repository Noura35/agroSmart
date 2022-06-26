const express= require('express');
const router = express.Router();
const Articles = require ('../models/articles');
const ValidateArticle = require('../validation/articles.validation')


//Request get all articles
router.get('/articles',(req,res)=>{
    Articles.find()
    .then(article=>res.json(article))
    .catch(err=>res.status(400).json(`Err: ${err}`))
});


//request add new article
router.post('/articles', (req, res) => {
    
    const { errors, isValid } = ValidateArticle(req.body)

    try {
        if (!isValid) {
            res.status(404).json(errors)
        } else {
            const newArticle = new Articles({
                title: req.body.title,
                article: req.body.article,
                authorname: req.body.authorname
            });
            newArticle
                .save()
                .then(() => res.json({ message: " The new article posted successfuly !!" }))
        }
         
         
         
    } catch (error) {
        console.log(error.message)
    }

});

//request find article by id 
router.get("/articles/:id",(req, res)=>{
    Articles.findById(req.params.id)
    .then(article => res.json(article))
        .catch (err=> res.status(400).json(`Error : ${err}`));
});

// request find and update article 
router.put("/articles/:id", (req, res) => {
    
    const { errors, isValid } = ValidateArticle(req.body)

    try {
        if (!isValid) {
            res.status(404).json(errors)
        } else {
            Articles.findById(req.params.id)
                .then(article => {
                    article.title = req.body.title;
                    article.article = req.body.article;
                    article.authorname = req.body.authorname;

                    article
                        .save()
                        .then(() => res.json("The Article is Updated successfully !"))
                        .catch(err => res.status(400).json(`Error: ${err}`));
                })
                .catch(err => res.status(400).json(`Error: ${err}`));
        }
    }     
     catch (error) {
        console.log(error.message)
    }
});

// request find by id and delete 
router.delete ("/articles/:id",(req,res)=>{
    Articles.findByIdAndDelete(req.params.id)
    .then(() => res.json("The article was deleted !"))
    .catch(err => res.status(400).json(`Error : ${err}`));
});

module.exports = router ;