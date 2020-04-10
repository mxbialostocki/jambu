import React, { useState } from 'react'

import deleteNoteMutation from '../graphql/mutations/deleteNote'
import UpdateNote from './UpdateNote'

const Note = ({ note }) => {
  const { content, _id } = note
  const [ editing, setEditing ] = useState(false)

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
        Edit
      </button>
      {editing && <UpdateNote note={note}/>}
    </React.Fragment>

  )
}

export default Note
