const { Schema, model } = require("mongoose");
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
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
      get: () => Date.now,
    },
    username: {     
      type: String,
      required: true,
    },
    reactions: [reactionSchema], //array of nested docs created with the reactionSchema
  },
  {
    toJSON: { 
      virtuals: true,
    },
    id: false,
  }
);

//create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function() { return `${this.reactions.length}`; });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
