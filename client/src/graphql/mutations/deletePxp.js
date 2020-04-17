import { commitMutation, graphql } from 'react-relay'
import environment from '../../environment'

const mutation = graphql`
  mutation deletePxpMutation($_id: ID) {
    deletePxp(_id: $_id)
  }
`

function deletePxpMutation (_id) {
  const variables = {
    _id
  }

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('Response received from server.')
    },
    updater: store => {
      const root = store.getRoot()
      const pxps = root.getLinkedRecords('pxps')
      const newPxps = pxps.filter(v => v.getValue('_id') !== _id)

      root.setLinkedRecords(newPxps, 'pxps')
    },

    onError: err => console.error(err)
  })
}

export default deletePxpMutation
