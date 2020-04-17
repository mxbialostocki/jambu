const MongoDbRepo = require('../repository/mongoDbRepository')

class PxpService {
  constructor () {
    this.PxpRepository = new MongoDbRepo('Pxps')
  }

  getAllPxps () {
    return this.PxpRepository.getAll()
  }

  updatePxp (_id, opt) {
    return this.PxpRepository.updateOne(_id, opt)
  }

  deletePxp (_id) {
    return this.PxpRepository.deleteOne(_id)
  }

  createPxp (opt) {
    return this.PxpRepository.create(opt)
  }
}

module.exports = PxpService
