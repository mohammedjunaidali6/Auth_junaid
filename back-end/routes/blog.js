const express = require("express");
const Blogs = require("../models/Blog");
const router = express.Router();
const authorization  = require("../middleware/authorization");

router.post('/add',(req,res)=>{
    if (!req.body.author ||
        !req.body.text){
            res.status(400).json({msg:"This is invalid data"});
    }
    let blog = new Blogs({
        author : req.body.author,
        text : req.body.text
    });
    blog.save()
    .then(b=>{
        if (b) {
            res.status(200).json({b});
        }
    })
    .catch(err=>{
        res.status(400).json({err});
    })
})

router.get('/blog',(req,res)=>{
    console.log(req.query);
    Blogs.find({})
    .then(b=>{
        if (b) {
            res.status(200).json({b});
        }
    })
    .catch(err=>{
        res.status(400).json({err});
    })
})

router.get('/blog-by-id',(req,res)=>{
    Blogs.findById(req.query.id)
    .then(b=>{
        if (b) {
            res.status(200).json({b});
        }
    })
    .catch(err=>{
        res.status(400).json({err});
    })
})

router.put('/blog',(req,res)=>{
    Blogs.findById(req.query.id)
    .then(b=>{
        if (b) {
            b.author = req.body.author;
            b.text = req.body.text;
            b.save()
            .then(b2=>{
                res.status(200).json(b2);
            })
        }
    })
    .catch(err=>{
        res.status(400).json({err});
    })
})

router.delete('/blog' , (req,res)=>{
    Blogs.findByIdAndDelete(req.query.id)
    .then(info=>{
        res.status(200).json(info);
    })
    .catch(err=>{
        res.status(400).json(err);
    })
})

module.exports = router