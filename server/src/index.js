require('dotenv').config()

console.log(process.env)
const express = require('express')
const cors = require('cors')
const app = express()
const graphqlHTTP = require('express-graphql')
const { setupDB } = require('./config/databaseConnection')

// Call in database connection
setupDB(value => console.log(value))

const schema = {

}

app.use(cors())
app.use(
  '/qraphql',
  graphqlHTTP(
    {
      schema,
      graphiql: true,
      pretty: true
    }
  )
)

app.listen(4000)

console.log('JULIA IS C00L')
