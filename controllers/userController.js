const { User, Thought} = require('../models'); //need Thought?

module.exports = {
    getAllUsers(req, res) {
        User.find()
          .then((users) => res.json(users))
          .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
          .select('-__v')
          .populate('users')
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'User does not exist' })
              : res.json(user)
              )
              .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
          .then((userDb) => res.json(userDb))
          .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {},
    deleteUser(req, res) {},
    addFriend(req, res) {
        User.findOne({ _id: req.params.userId })
          .populate({ path: "friends", select: "-__v" })
          .then((user) =>
            !user
              ? res.status(404).json({ message: "No user with that ID" })
              : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    deleteFriend(req, res) {},
};