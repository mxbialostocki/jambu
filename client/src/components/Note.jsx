import React, { useState } from 'react'

import deleteNoteMutation from '../graphql/mutations/deleteNote'
import UpdateNote from './UpdateNote'

const Note = ({ note }) => {
  const { content, _id } = note
  const [ editing, setEditing ] = useState(false)
  const buttonLabel = editing ? 'cancel' : 'edit'

  return (
    <React.Fragment>
      <p>
        {content}
      </p>
      <button onClick={() => {
        deleteNoteMutation(_id)
      }}
      >
        Delete
      </button>
      <button onClick={() => {
        setEditing(!editing)
      }}>
        {buttonLabel}
      </button>
      {editing && <UpdateNote note={note} setEditing={setEditing}/>}
    </React.Fragment>
  )
}

export default Note
