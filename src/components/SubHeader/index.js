import React from 'react'
import { Row, Col } from 'reactstrap'
import CountBar from '../CountBar/'
import SearchBar from '../SearchBar/'
import SortBar from '../SortBar/'

const SubHeader = () => {
  return (
    <Row>
      <Col sm={4}>
      <SearchBar />
      </Col>
      <Col sm={4}>
      <CountBar />
      </Col>
      <Col sm={4}>
      <SortBar />
      </Col>
    </Row>)
}

export default SubHeader
