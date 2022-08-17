const { User, Thought } = require("../models"); //need Thought?

module.exports = {
  getAllUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate({ path: "friends", select: "-__v" })
      .populate({ path: "thoughts", select: "-__v" })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "User does not exist" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  createUser(req, res) {
    User.create(req.body)
      .then((userDb) => res.json(userDb))
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.updateOne({ _id: req.params.userId }, req.body)
      .then((user) =>
        !user
          ? res.status(404).json({ message: "User does not exist" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {    
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "User does not exist" })
          : Thought.deleteMany({ _id: { $in: username.thoughts }}) //how to delete thoughts when you delete a user???
      )
      .catch((err) => res.status(500).json(err));
  },
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { friends: req.params.friendId } }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
