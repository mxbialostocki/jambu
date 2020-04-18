const { pxpType } = require('../pxpTypes')
const { GraphQLList } = require('graphql')
const PxpService = require('../../services/PxpService')

const PxpsQuery = {
  type: GraphQLList(pxpType),
  args: {},
  resolve: async () => {
    const pxpService = new PxpService()
    const pxps = await pxpService.getAllPxps()

    return pxps
  }
}

module.exports = { PxpsQuery }
