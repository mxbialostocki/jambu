require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const graphqlHTTP = require('express-graphql')
const { setupDB } = require('./config/databaseConnection')

const schema = require('./graphql/schema')

// Call in database connection
setupDB(value => console.log(value))

app.use(cors())
app.use(
  '/graphql',
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
