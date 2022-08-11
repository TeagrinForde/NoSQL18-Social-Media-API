const { Schema, Types } = require("mongoose");
const thoughtSchema = require('./Thought');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  thoughts: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(), //array of _id values referencing the Thought model?
  },
  friends: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(), //array of _id values referencing the User model?
  },
});

//create a virtual called friendCount that retrieves the length of the user's friends array field on query

const User = model('user', userSchema);

module.exports = User;
