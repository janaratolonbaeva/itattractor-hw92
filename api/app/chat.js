const express = require('express');
const {nanoid} = require('nanoid');
const Message = require('../models/Message');
const User = require('../models/User');

const router = express.Router();
require('express-ws')(router);

const activeConnections = {};

router.ws('/', async function (ws, req) {
  const token = req.query.token;
  const user = await User.findOne({token});

  if (!user) {
    ws.close();
    return;
  }

  const userActives = user;
  console.log('client connected! id=', userActives._id);
  activeConnections[userActives] = ws;

  ws.on('message', async msg => {
    const decoded = JSON.parse(msg);

    const messageData = {
      message: decoded.message,
      user: user._id
    };

    const message = new Message(messageData);
    await message.save();

    if (decoded.type === 'CREATE_MESSAGE') {
      const messages = await Message.find().populate('user', 'displayName');

      if (messages.length > 30) {
        messages.splice(30);
      }


      ws.send(JSON.stringify({
        type: 'MESSAGES',
        message: messages,
        userActives: activeConnections
      }))
    }
  });

  ws.on('close', () => {
    console.log('client disconnected! id=', userActives._id);
    delete activeConnections[userActives];
  })
});

module.exports = router;