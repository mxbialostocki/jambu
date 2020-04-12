import React, { useState } from 'react'

import createNoteMutation from '../graphql/mutations/createNote'

const CreateNote = () => {
  const [newNoteTitle, setNewNoteTitle] = useState('')
  const [newNoteContent, setNewNoteContent] = useState('')
  return (
    <React.Fragment>
      <input type="text" value={newNoteTitle} onChange={(event) => { setNewNoteTitle(event.target.value) }} placeholder="write Note title here..." />
      <input type="text" value={newNoteContent} onChange={(event) => { setNewNoteContent(event.target.value) }} placeholder="write Note content here..." />
      <button onClick={() => {
        if (newNoteTitle && newNoteContent) {
          createNoteMutation(newNoteTitle, newNoteContent)
          setNewNoteTitle('')
          setNewNoteContent('')
        }
      }}
      >
        create Note
      </button>
    </React.Fragment>
  )
}

export default CreateNote
