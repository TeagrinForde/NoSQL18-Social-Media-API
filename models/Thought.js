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
    },
    username: {     //attach to USER?
      type: String,
      required: true,
    },
    reactions: [reactionSchema], //array of nested docs created with the reactionSchema
  },
  {
    toJSON: { 
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

//create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function() { return `${this.reactions.length}`; }); //set needed?

module.exports = Thought;
