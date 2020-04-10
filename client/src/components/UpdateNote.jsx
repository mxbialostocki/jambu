import React, { useState } from 'react'

import updateNote from '../graphql/mutations/updateNote'

const UpdateNote = ({ note, setEditing }) => {
  const { _id, content } = note

  const [ inputState, setInputState ] = useState(content)

  return (
    <React.Fragment>
      <input value={inputState} onChange={event => setInputState(event.target.value)}/>
      <button onClick={() => {
        updateNote(_id, inputState)
        setEditing(false)
      }}>
        Update
      </button>
    </React.Fragment>
  )
}

export default UpdateNote
