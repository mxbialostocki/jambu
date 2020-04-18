import React, { useState } from 'react'
import { Button, Input, Form, TextArea } from 'semantic-ui-react'

import updatePxp from '../graphql/mutations/updatePxp'

const UpdatePxp = ({ pxp, setEditing }) => {
  const { _id, title, content } = pxp

  const [ titleInputState, setTitleInputState ] = useState(title)
  const [ contentInputState, setContentInputState ] = useState(content)

  return (
    <React.Fragment>
      <Form>
        <Input transparent value={titleInputState} onChange={event => setTitleInputState(event.target.value)} />
        <TextArea transparent value={contentInputState} onChange={event => setContentInputState(event.target.value)} />
        <Button onClick={() => {
          updatePxp(_id, titleInputState, contentInputState)
          setEditing(false)
        }}>
          Update
        </Button>
      </Form>
    </React.Fragment>
  )
}

export default UpdatePxp
