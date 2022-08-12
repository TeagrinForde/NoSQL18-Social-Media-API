const router = requires('express').Router();
const {
    getAllUsers,
    getSingleUser, //get by user id
    createUser, //post by username and email
    updateUser, //by user id
    deleteUser, //by user id AND delete all thoughts
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser); //can I do this?

// /api/users/:userId/thoughts
router.route('/:userId/thoughts').post(addThought);

// /api/users/:userId/thoughts/:thoughtId to remove thoughts
router.route('/:userId/thoguhts/:thoughtId').delete(removeThoughts);

module.exports = router;