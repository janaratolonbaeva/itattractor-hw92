require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const exitHook = require('async-exit-hook');
const {nanoid} = require('nanoid');
const config = require('./config');
const users = require('./app/users');
const chat = require('./app/chat');

const app = express();
require('express-ws')(app);
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

const port = 8080;

app.use('/users', users);
app.use('/chat', chat);

const run = async () => {
  await mongoose.connect(config.db.url, config.db.options);

  app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
  });

  exitHook(async callback => {
    await mongoose.disconnect();
    console.log('mongoose disconnect');
    callback();
  })
};

run().catch(console.error);