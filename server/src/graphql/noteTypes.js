const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql')

const noteType = new GraphQLObjectType({
  name: 'Note',
  fields: {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    dateCreated: { type: GraphQLString },
    dateModified: { type: GraphQLString }
  }
})

module.exports = { noteType }
