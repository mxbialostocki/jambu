import React from 'react'
import { QueryRenderer } from 'react-relay'
import { Loader } from 'semantic-ui-react'
import environment from '../environment'
import getNotesQuery from '../graphql/queries/getNotes'

// component imports
import CreateNote from './CreateNote.jsx'
import DisplayNotes from './DisplayNotes.jsx'

const Daemon = () => {
  return (
    <React.Fragment>
      <CreateNote />
      <QueryRenderer
        environment={environment}
        query={getNotesQuery}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            console.log({ error })
            return <div>`eerrr0r`</div>
          }
          if (!props) {
            return (
              <Loader active inline="centered" />
            )
          }
          return <DisplayNotes {...props} />
        }}
      />
    </React.Fragment>
  )
}

export default Daemon
