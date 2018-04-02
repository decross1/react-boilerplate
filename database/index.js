const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message');
const db = mongoose.connection;

db.on('error', () => {
  console.log('Error connecting to Mongo');
});
db.once('open', () => {
  console.log('Connection to Mongo successful');
});

const messageSchema = mongoose.Schema({
  message: String,
  createdAt: Date,
});

const Message = mongoose.model('Message', messageSchema);

const findAllMessages = () =>
  Message
  .find({})
  .sort('-createdAt');

const addMessage = (msgBody) => Message.create({
  message: msgBody,
  createdAt: new Date(),
});

module.exports = {
  findAllMessages,
  addMessage,
};
