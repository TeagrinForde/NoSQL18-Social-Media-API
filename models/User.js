const { Schema, model } = require("mongoose");

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
      "Please enter a valid email address",
    ],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId, //array of _id values referencing the Thought model
      ref: 'Thought',
    }
  ], 
  friends: [
    {
      type: Schema.Types.ObjectId, //array of _id values self-referencing the User model
      ref: 'User',
    }
  ],   
},  
  {
    toJSON: { 
      virtuals: true,
    },
    id: false,
  }
);

//virtual called friendCount that retrieves the length of the user's friends array field on query
userSchema.virtual('friendCount').get(function() { return `${this.friends.length}`; }); 

const User = model('user', userSchema);

module.exports = User;
