import React, { useState } from 'react'

const UpdateNote = ({ note }) => {
  const { _id, content } = note

  const [ inputState, setInputState ] = useState(content)

  return (
    <React.Fragment>
      <input value={inputState} onChange={event => setInputState(event.target.value)}/>
      <button onClick={() => {}}>
        Update
      </button>
    </React.Fragment>
  )
}

export default UpdateNote
