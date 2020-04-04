import React from 'react'
import { QueryRenderer } from 'react-relay'
import environment from '../environment'
import getNotesQuery from '../graphql/queries/getNotes'

// component imports
import CreateNote from './CreateNote.jsx'

const Daemon = () => {
  return (
    <React.Fragment>
      <QueryRenderer
        environment={environment}
        query={getNotesQuery}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            console.log({error})
            return <div>`eerrr0r`</div>
          }
          if (!props) {
            return <div>`loading...`</div>
          }
          return <div>`components go here`</div>
        }}
      />
      <CreateNote />
    </React.Fragment>
  )
}

export default Daemon
