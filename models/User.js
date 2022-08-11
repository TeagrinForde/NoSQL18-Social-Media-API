const { Schema, Types } = require("mongoose");

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
    default: () => new Types.ObjectId(),
  },
  friends: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
});

const User = model('user', userSchema);

module.exports = User;
