import React, { useState } from 'react'
import { Button, Input } from 'semantic-ui-react'

import createPxpMutation from '../graphql/mutations/createPxp'

const CreatePxp = () => {
  const [newPxpTitle, setNewPxpTitle] = useState('')
  const [newPxpContent, setNewPxpContent] = useState('')
  return (
    <React.Fragment>
      <Input transparent size="massive"  type="text" value={newPxpTitle} onChange={(event) => { setNewPxpTitle(event.target.value) }} placeholder="write Pxp title here..." />
      <Input transparent size="massive"  type="text" value={newPxpContent} onChange={(event) => { setNewPxpContent(event.target.value) }} placeholder="write Pxp content here..." />
      <Button size="massive" onClick={() => {
        if (newPxpTitle && newPxpContent) {
          createPxpMutation(newPxpTitle, newPxpContent)
          setNewPxpTitle('')
          setNewPxpContent('')
        }
      }}
      >
        create Pxp
      </Button>
    </React.Fragment>
  )
}

export default CreatePxp
