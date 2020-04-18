import React from 'react'
import { QueryRenderer } from 'react-relay'
import { Loader } from 'semantic-ui-react'
import environment from '../environment'
import getPxpsQuery from '../graphql/queries/getPxps'

// component imports
import CreatePxp from './CreatePxp.jsx'
import DisplayPxps from './DisplayPxps.jsx'

const Daemon = () => {
  return (
    <React.Fragment>
      <CreatePxp />
      <QueryRenderer
        environment={environment}
        query={getPxpsQuery}
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
          return <DisplayPxps {...props} />
        }}
      />
    </React.Fragment>
  )
}

export default Daemon
