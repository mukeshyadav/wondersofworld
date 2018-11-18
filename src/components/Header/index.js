import React from 'react'
import { Row, Col } from 'reactstrap'
import Logo from '../Logo/'
import Menu from '../Menu/'
const Header = () => {
  return (

    <Row>
      <Col>
      <Logo />
      </Col>
      <Col>
      <Menu />
      </Col>
    </Row>

  )
}

export default Header
