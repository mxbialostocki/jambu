import { commitMutation, graphql } from 'react-relay'
import environment from '../../environment'

const mutation = graphql`
  mutation updatePxpMutation($_id: ID, $title: String, $content: String) {
    updatePxp(_id: $_id, title: $title, content: $content) {
      _id
      title
      content
      dateCreated
      dateModified
    }
  }
`

function updatePxpMutation (_id, title, content) {
  const variables = {
    _id,
    title,
    content
  }

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('Response received from server.')
    },
    updater: store => {
      const newUpdatedPxp = store.getRootField('updatePxp')
      const root = store.getRoot()
      const pxps = root.getLinkedRecords('pxps')
      const newPxps = pxps.filter(v => v.getValue('_id') !== _id)

      root.setLinkedRecords([...newPxps, newUpdatedPxp], 'pxps')
    },
    onError: err => console.error(err)
  })
}

export default updatePxpMutation
