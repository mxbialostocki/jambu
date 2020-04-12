import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

import deleteNoteMutation from '../graphql/mutations/deleteNote'
import UpdateNote from './UpdateNote'

const Note = ({ note }) => {
  const { _id, title, content } = note
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
        deleteNoteMutation(_id)
      }}
      >
        Delete
      </Button>
      <Button onClick={() => {
        setEditing(!editing)
      }}>
        {buttonLabel}
      </Button>
      {editing && <UpdateNote note={note} setEditing={setEditing}/>}
    </React.Fragment>
  )
}

export default Note
