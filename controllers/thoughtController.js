const { User, Thought} = require('../models');

module.exports = {
    getAllThoughts(req, res) {
        Thought.find()
          .then((thoughts) => res.json(thoughts))
          .catch((err) => res.status(500).json(err));
    },
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
          .select('-__v')
          .populate('thoughts')
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'Thought does not exist! heheheh' })
              : res.json(user)
              )
              .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body)
          .then((thoughtDb) => res.json(thoughtDb))
          .catch((err) => res.status(500).json(err));
    },
    updateThought(req, res) {},
    deleteThought(req, res) {},
    createReaction(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
          .populate({ path: "reactions", select: "-__v" })
          .then((user) =>
            !thought
              ? res.status(404).json({ message: "No thought with that ID" })
              : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    deleteReaction(req, res) {},
}