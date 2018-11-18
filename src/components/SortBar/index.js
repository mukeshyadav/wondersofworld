import React from 'react'
import { FormGroup, Label, Input, Col } from 'reactstrap'
import WOWContext from '../../store.js'

const SortBar = () => {
  return (<WOWContext.Consumer>
            {ctx => (<FormGroup row>
                                                                                                                                                                                    <Label for='sortBy' sm={2}>
                                                                                                                                                                                      Sort By:
                                                                                                                                                                                    </Label>
                                                                                                                                                                                    <Col sm={10}>
                                                                                                                                                                                    <Input
                                                                                                                                                                                      type='select'
                                                                                                                                                                                      name='sortBy'
                                                                                                                                                                                      id='sortBy'
                                                                                                                                                                                      onChange={(e) => ctx.sortBy(e)}>
                                                                                                                                                                                    <option value="ratings">
                                                                                                                                                                                      Ratings
                                                                                                                                                                                    </option>
                                                                                                                                                                                    <option value="likes">
                                                                                                                                                                                      Likes
                                                                                                                                                                                    </option>
                                                                                                                                                                                    </Input>
                                                                                                                                                                                    </Col>
                                                                                                                                                                                  </FormGroup>)}
          </WOWContext.Consumer>)
}

export default SortBar
