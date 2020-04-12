import { graphql } from 'react-relay'

const getNotesQuery = graphql`
  query getNotesQuery {
    notes {
      _id
      title
      content
    }
  }
`

export default getNotesQuery
