import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

import Pxp from './Pxp.jsx'

const DisplayPxps = ({ pxps }) => {

  const [sortFilter, setSortFilter] = useState('dateCreated')
  const sortedPxps = pxps.slice().sort((a, b) => a[sortFilter] - b[sortFilter])

  const buttonFilter = sortFilter === 'dateCreated' ? 'dateModified' : 'dateCreated'

  return (
    <React.Fragment>
      <Button onClick={() => setSortFilter(buttonFilter)}>Sort!</Button>
      {sortedPxps.map(pxp => {
        return <Pxp key={pxp._id} pxp={pxp} />
      })}
    </React.Fragment>
  )
}

export default DisplayPxps
