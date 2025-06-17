const express = require('express');
const router = express.Router();
const db = require('../db');
const postsRouter = require('../api/posts');  

router.use('/posts', postsRouter); 

module.exports = router;
