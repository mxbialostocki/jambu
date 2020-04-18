/* eslint-disable no-unused-vars */
const { pxpType } = require('../pxpTypes')
const {
  GraphQLString,
  GraphQLID
} = require('graphql')
const PxpService = require('../../services/PxpService')

const CreatePxpMutation = {
  type: pxpType,
  args: {
    title: { type: GraphQLString },
    content: { type: GraphQLString }
  },
  resolve: async (_, { title, content }) => {
    const pxpService = new PxpService()
    const dateCreated = Date.now()
    const newPxp = await pxpService.createPxp({ title, content, dateCreated })

    return newPxp
  }
}

const DeletePxpMutation = {
  type: GraphQLID,
  args: {
    _id: { type: GraphQLID }
  },
  resolve: async (_, { _id }) => {
    const pxpService = new PxpService()
    const res = await pxpService.deletePxp(_id)

    if (res.ok) {
      return _id
    }
  }
}

const UpdatePxpMutation = {
  type: pxpType,
  args: {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString }
  },
  resolve: async (_, { _id, title, content }) => {
    const pxpService = new PxpService()
    const dateModified = Date.now()
    const updatedPxp = await pxpService.updatePxp(_id, { title, content, dateModified })

    return updatedPxp
  }
}

module.exports = { CreatePxpMutation, UpdatePxpMutation, DeletePxpMutation }
