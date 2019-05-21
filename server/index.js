require('dotenv').config();
const express = require('express');
const messagesCtrl=require('./messagesCtrl')
const session = require('express-session')

let { SERVER_PORT,SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());
app.use(
  session({
    secret:SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
)

app.get('/api/messages', messagesCtrl.getAllMessages);
app.post('/api/message',messagesCtrl.createMessage)

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port:${SERVER_PORT}`)
})