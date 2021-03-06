const router = require('express').Router();
const {
    addComment,
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comment-controller');

router
    .route('/:pizzaId').post(addComment)
    .put(addReply)
    .delete(removeComment);

router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;