import { commitMutation, graphql } from 'react-relay'
import environment from '../../environment'

const mutation = graphql`
  mutation createPxpMutation($title: String, $content: String) {
    createPxp(title: $title, content: $content) {
      _id
      title
      content
      dateCreated
    }
  }
`

function createPxpMutation (title, content) {
  const variables = {
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
      const payload = store.getRootField('createPxp')
      const root = store.getRoot()
      const pxps = root.getLinkedRecords('pxps')

      const newPxps = [...pxps, payload]
      root.setLinkedRecords(newPxps, 'pxps')
    },
    onError: err => console.error(err)
  })
}

export default createPxpMutation
