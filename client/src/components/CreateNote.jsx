import React, { useState } from 'react'

import createNoteMutation from '../graphql/mutations/createNote'

const CreateNote = () => {
  const [newNote, setNewNote] = useState('')
  return (
    <React.Fragment>
      <input type="text" value={newNote} onChange={(event) => { setNewNote(event.target.value) }} placeholder="write Note here..." />
      <button onClick={() => {
        if (newNote) {
          createNoteMutation(newNote)
          setNewNote('')
        }
      }}
      >
        create Note
      </button>
    </React.Fragment>
  )
}

export default CreateNote
