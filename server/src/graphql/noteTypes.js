const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql')

const noteType = new GraphQLObjectType({
  name: 'Note',
  fields: {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString }
  }
})

module.exports = { noteType }
