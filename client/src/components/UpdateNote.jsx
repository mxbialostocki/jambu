import React, { useState } from 'react'

import updateNote from '../graphql/mutations/updateNote'

const UpdateNote = ({ note, setEditing }) => {
  const { _id, title, content } = note

  const [ titleInputState, setTitleInputState ] = useState(title)
  const [ contentInputState, setContentInputState ] = useState(content)

  return (
    <React.Fragment>
      <input value={titleInputState} onChange={event => setTitleInputState(event.target.value)} />
      <input value={contentInputState} onChange={event => setContentInputState(event.target.value)} />
      <button onClick={() => {
        updateNote(_id, titleInputState, contentInputState)
        setEditing(false)
      }}>
        Update
      </button>
    </React.Fragment>
  )
}

export default UpdateNote
