const router = requires('express').Router();
const {
    getAllUsers,
    getSingleUser, //get by user id
    createUser, //post by username and email
    updateUser, //by user id
    deleteUser, //by user id AND delete all thoughts
    addFriend, //add a new friend to a user's friend lis
    deleteFriend, // remove a friend from a user's friend list
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friend/:thoughtId to remove friend
router.route('/:userId/friend/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;