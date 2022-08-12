const { Schema, model } = require("mongoose");
const thoughtSchema = require('./Thought');

const userSchema = new Schema({
  username: { //do I need an ID for this?
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
      "Please enter a valid email address",
    ],
  },
  thoughts: [thoughtSchema], //array of _id values referencing the Thought model?
},
  // friends: {},   //array of _id values self-referencing the User model?
  // {
  //   toJSON: { //create a virtual called friendCount that retrieves the length of the user's friends array field on query
  //     virtuals: true,
  //   },
  //   id: true,
  // }
);



const User = model('user', userSchema);

module.exports = User;
