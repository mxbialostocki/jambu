import { graphql } from 'react-relay'

const getNotesQuery = graphql`
  query getNotesQuery {
    notes {
      _id
      content
    }
  }
`

export default getNotesQuery
