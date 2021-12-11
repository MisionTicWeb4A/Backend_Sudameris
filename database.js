const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://sudamerist1:DOZhuHLup5NejpFN@cluster0.jkvzv.mongodb.net/data_sudameris?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  
  client.close();
});

module.exports = client;