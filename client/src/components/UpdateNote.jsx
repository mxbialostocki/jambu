import React, { useState } from 'react'
import { Button, Input, Form, TextArea } from 'semantic-ui-react'

import updateNote from '../graphql/mutations/updateNote'

const UpdateNote = ({ note, setEditing }) => {
  const { _id, title, content } = note

  const [ titleInputState, setTitleInputState ] = useState(title)
  const [ contentInputState, setContentInputState ] = useState(content)

  return (
    <React.Fragment>
      <Form>
        <Input transparent value={titleInputState} onChange={event => setTitleInputState(event.target.value)} />
        <TextArea transparent value={contentInputState} onChange={event => setContentInputState(event.target.value)} />
        <Button onClick={() => {
          updateNote(_id, titleInputState, contentInputState)
          setEditing(false)
        }}>
          Update
        </Button>
      </Form>
    </React.Fragment>
  )
}

export default UpdateNote
