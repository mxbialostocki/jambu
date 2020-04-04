const { printSchema } = require('graphql')
const fs = require('fs')

const printSchemaFromBuild = schema => {
  fs.writeFile('./data/schema.graphql', printSchema(schema), error => {
    if (error) {
      return console.log(error)
    }
    console.log('schema generated!') 
  })
}

module.exports = printSchemaFromBuild
