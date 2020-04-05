import React from 'react'

import Note from './Note.jsx'

const DisplayNotes = ({ notes }) => {
    return (
      notes.map(note => {
        return <Note note={note} />
      })
    )
}

export default DisplayNotes
