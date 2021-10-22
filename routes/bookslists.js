const express = require("express");
const router = express.Router();
const Booklist = require('../models/booklist');

router.get('/', async (req, res) =>{
    try {
        const booklist = await Booklist.find();
        res.json(booklist);
    }catch (err) {
        res.send(err);
   }
})

router.post('/', async (req, res) => {
    const booklist = new Booklist({
        bookName: req.body.bookName,
        authorName: req.body.authorName
    })
    try {
        const b1 = await booklist.save();
        res.json(b1);
    } catch (err) {
        res.send(err);
   }
})


router.patch('/:id', async (req, res) => {
    try {
        const booklist = await Booklist.findById(req.params.id);
        booklist.bookName = req.body.bookName;
        booklist.authorName = req.body.authorName;
        const b1 = await booklist.save();
        res.json(b1);
    } catch (err) {
        res.send(err);
   }
})

router.delete('/:id', async (req, res) => {
    try {
        const booklist = await Booklist.findByIdAndDelete(req.params.id);
        res.json("deleted");
    } catch (err) {
        res.send(err);
   }
})

module.exports = router;