import { commitMutation, graphql } from 'react-relay'
import environment from '../../environment'

const mutation = graphql`
  mutation updateNoteMutation($_id: ID, $title: String, $content: String) {
    updateNote(_id: $_id, title: $title, content: $content) {
      _id
      title
      content
    }
  }
`

function updateNoteMutation (_id, title, content) {
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
      const newUpdatedNote = store.getRootField('updateNote')
      const root = store.getRoot()
      const notes = root.getLinkedRecords('notes')
      const newNotes = notes.filter(v => v.getValue('_id') !== _id)

      root.setLinkedRecords([...newNotes, newUpdatedNote], 'notes')
    },
    onError: err => console.error(err)
  })
}

export default updateNoteMutation
