const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql')

const pxpType = new GraphQLObjectType({
  name: 'Pxp',
  fields: {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    dateCreated: { type: GraphQLString },
    dateModified: { type: GraphQLString }
  }
})

module.exports = { pxpType }
