import { graphql } from 'react-relay'

const getNotesQuery = graphql`
  query getNotesQuery {
    notes {
      _id
      title
      content
      dateCreated
      dateModified
    }
  }
`

export default getNotesQuery
