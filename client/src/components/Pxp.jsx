import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

import deletePxpMutation from '../graphql/mutations/deletePxp'
import UpdatePxp from './UpdatePxp'

const Pxp = ({ pxp }) => {
  const { _id, title, content } = pxp
  const [ editing, setEditing ] = useState(false)
  const buttonLabel = editing ? 'cancel' : 'edit'

  return (
    <React.Fragment>
      <p>
        {title}
      </p>
      <p>
        {content}
      </p>
      <Button onClick={() => {
        deletePxpMutation(_id)
      }}
      >
        Delete
      </Button>
      <Button onClick={() => {
        setEditing(!editing)
      }}>
        {buttonLabel}
      </Button>
      {editing && <UpdatePxp pxp={pxp} setEditing={setEditing}/>}
    </React.Fragment>
  )
}

export default Pxp
