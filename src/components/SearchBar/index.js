import React from 'react'
import { FormGroup, Input } from 'reactstrap'
import WOWContext from '../../store.js'

const Searchbar = () => {
  return (
    <WOWContext.Consumer>
      {ctx => (
                                               <FormGroup>
                                                 <Input type='search' placeholder='Search by Name' onKeyUp={(e) => ctx.updateRecords(e.target.value)} />
                                               </FormGroup>
                                             )}
    </WOWContext.Consumer>
  )
}

export default Searchbar
