import { graphql } from 'react-relay'

const getPxpsQuery = graphql`
  query getPxpsQuery {
    pxps {
      _id
      title
      content
      dateCreated
      dateModified
    }
  }
`

export default getPxpsQuery
