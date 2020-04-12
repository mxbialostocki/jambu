import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

import updateNote from '../graphql/mutations/updateNote'

const UpdateNote = ({ note, setEditing }) => {
  const { _id, title, content } = note

  const [ titleInputState, setTitleInputState ] = useState(title)
  const [ contentInputState, setContentInputState ] = useState(content)

  return (
    <React.Fragment>
      <input value={titleInputState} onChange={event => setTitleInputState(event.target.value)} />
      <input value={contentInputState} onChange={event => setContentInputState(event.target.value)} />
      <Button onClick={() => {
        updateNote(_id, titleInputState, contentInputState)
        setEditing(false)
      }}>
        Update
      </Button>
    </React.Fragment>
  )
}

export default UpdateNote
