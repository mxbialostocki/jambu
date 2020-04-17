const { GraphQLSchema, GraphQLObjectType } = require('graphql')
const { PxpsQuery } = require('./query/PxpsQuery')
const {
  CreatePxpMutation,
  UpdatePxpMutation,
  DeletePxpMutation
} = require('./mutation/PxpsMutation')

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    pxps: PxpsQuery
  })
})

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createPxp: CreatePxpMutation,
    deletePxp: DeletePxpMutation,
    updatePxp: UpdatePxpMutation
  })
})

const schema = new GraphQLSchema({ query: QueryType, mutation: MutationType })

module.exports = schema
