const { Schema, Types } = require("mongoose");
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtId: { //Is this necessary?
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: true,
      maxLength: 280,
      minLength: 1,
      default: "No thoughts at this time.",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {     //attach to USER?
      type: String,
      required: true,
    },
    reactions: [reactionSchema], //array of nested docs created with teh reactionSchema
  },
//   {
//     toJSON: { //create a virtual called reactionCount that retrieves teh length of the thought's reactions array field on query
//       getters: true,
//       virtuals: true,
//     },
//     id: false,
//   }
);

module.exports = thoughtSchema;
