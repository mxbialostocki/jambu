const MongoClient = require('mongodb').MongoClient

let mongoDB

const setupDB = callback => {
  const uri = `mongodb+srv://dbAdmin:${process.env.MONGO_ADMIN_PASSWORD}@cluster0-ysmyo.gcp.mongodb.net/test?retryWrites=true&w=majority`

  MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    mongoDB = client.db('jambu-server')
    if (err) {
      return callback(err)
    } else {
      return callback('Database is sweet')
    }
  })
}

const getDB = () => {
  return mongoDB
}

module.exports = { setupDB, getDB }
