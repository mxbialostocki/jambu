import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

import Note from './Note.jsx'

const DisplayNotes = ({ notes }) => {

  const [sortFilter, setSortFilter] = useState('dateCreated')
  const sortedNotes = notes.slice().sort((a, b) => a[sortFilter] - b[sortFilter])

  const buttonFilter = sortFilter === 'dateCreated' ? 'dateModified' : 'dateCreated'

  return (
    <React.Fragment>
      <Button onClick={() => setSortFilter(buttonFilter)}>Sort!</Button>
      {sortedNotes.map(note => {
        return <Note key={note._id} note={note} />
      })}
    </React.Fragment>
  )
}

export default DisplayNotes
