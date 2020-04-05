import React from 'react'

import deleteNoteMutation from '../graphql/mutations/deleteNote'

const Note = ({ note }) => {
  const { content, _id } = note

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
    </React.Fragment>

  )
}

export default Note
