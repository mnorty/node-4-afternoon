const allMessages = []

module.exports = {
  getAllMessages: (req,res) => { // always needs a req and a res
    res.status(200).send(allMessages) // this sends a response status of 200 and then allMessages to the client
  },
  createMessage: (req,res) => {
    const newMessage ={ 
      username,
      message
    };
    allMessages.push(newMessage); //push adds an item to the end of an array. this is pushing the newMessage to the end of allMessages.
    res.status(200).send(allMessages) //sends back the succsess status and the allMessages array
  }
}