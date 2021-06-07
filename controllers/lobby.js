//Imports
const express = require('express');
const router = express.Router();

//Home Route
router.get('/', (req, res) => {
    console.log('home route hit');
    res.render('index')
})

//About Route
router.get('/about', (req, res) =>{
    res.render('about')
})

//Listen Route
router.get('/listen', (req, res) =>{
    res.render('listen')
})

//Exports
module.exports = router