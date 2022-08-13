const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { User, Thought } = require('../models'); //Reaction 'model' needed?
const getSeedData = require('./data');

connection.on('error', (err) => err);
connection.once('open', async () => {
    console.log('Connection Made!');
    await Thought.deleteMany({});
    await User.deleteMany({});

    const users = [];

    await User.collection.insertMany(users);
    process.exit(0);
});