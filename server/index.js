require('dotenv').config();
const express = require('express');
const messagesCtrl=require('./messagesCtrl')
const session = require('express-session')
const checkForSession = require('./middlewares/checkForSession')

const app = express();

let { SERVER_PORT,SESSION_SECRET } = process.env;

app.use(express.json());
app.use(
  session({
    secret:SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
)
app.use(checkForSession);

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port:${SERVER_PORT}`)
})