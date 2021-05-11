const mongoose = require('mongoose');
const {nanoid} = require('nanoid');
const config = require('./config');
const User = require('./models/User');

const run= async () => {
  await mongoose.connect(config.db.url, config.db.options);

  const collections = await mongoose.connection.db.listCollections().toArray();

  for (const coll of collections) {
    await mongoose.connection.db.dropCollection(coll.name);
  }

  await User.create({
    email: 'user@chat.ch',
    password: 'user',
    token: nanoid(),
    role: 'user',
    displayName: 'User'
  }, {
    email: 'moderator@moderator.mo',
    password: 'moderator',
    token: nanoid(),
    role: 'moderator',
    displayName: 'Moderator'
  });

  await mongoose.connection.close();
};

run().catch(console.error);

