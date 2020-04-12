import React from 'react'

import Note from './Note.jsx'

const DisplayNotes = ({ notes }) => {
  return (
    notes.map(note => {
      return <Note key={note._id} note={note} />
    })
  )
}

export default DisplayNotes
