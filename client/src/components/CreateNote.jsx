import React, { useState } from 'react'
import { Button, Input } from 'semantic-ui-react'

import createNoteMutation from '../graphql/mutations/createNote'

const CreateNote = () => {
  const [newNoteTitle, setNewNoteTitle] = useState('')
  const [newNoteContent, setNewNoteContent] = useState('')
  return (
    <React.Fragment>
      <Input transparent size="massive"  type="text" value={newNoteTitle} onChange={(event) => { setNewNoteTitle(event.target.value) }} placeholder="write Note title here..." />
      <Input transparent size="massive"  type="text" value={newNoteContent} onChange={(event) => { setNewNoteContent(event.target.value) }} placeholder="write Note content here..." />
      <Button size="massive" onClick={() => {
        if (newNoteTitle && newNoteContent) {
          createNoteMutation(newNoteTitle, newNoteContent)
          setNewNoteTitle('')
          setNewNoteContent('')
        }
      }}
      >
        create Note
      </Button>
    </React.Fragment>
  )
}

export default CreateNote
