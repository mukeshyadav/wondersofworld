import React from 'react'
import { FormGroup, Label, Input, Col } from 'reactstrap'

const SortBar = () => {
  return (<FormGroup row>
            <Label for='sortBy' sm={2}>
              Sort By:
            </Label>
            <Col sm={10}>
            <Input type='select' name='sortBy' id='sortBy'>
            <option>
              Ratings
            </option>
            <option>
              Likes
            </option>
            </Input>
            </Col>
          </FormGroup>)
}

export default SortBar
