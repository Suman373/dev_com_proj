const express = require('express');
const router = express.Router();
const controllers = require('../controllers/postController');

// get all posts
router.get('/',controllers.getAllPosts);

// get posts by userId
router.get('/userPosts',controllers.getUserPosts);

// create post 
router.post('/',controllers.addPost);

// edit post
router.put('/:id', controllers.editPost);

// join 
router.post('/join/:id',controllers.joinPost);

// leave 
router.post('/leave/:id',controllers.leavePost);

// remove joinee
// router.put('/remove/:id',controllers.removeJoinee);

// delete post
router.delete('/:id', controllers.deletePost);


module.exports = router;