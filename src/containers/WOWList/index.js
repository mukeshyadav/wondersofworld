import React from 'react'
import { Row, Col } from 'reactstrap'
import WOWCard from '../../components/Card'
import WOWContext from '../../store.js'

const WOWList = (props) => {
  return (
    <Row>
      <WOWContext.Consumer>
        {ctx => ctx.wow.length ? ctx.wow.map((wowd, index) => <Col
                                                                xs={12}
                                                                md={6}
                                                                lg={4}
                                                                key={index}>
                                                              <WOWCard {...wowd} />
                                                              </Col>) : <Col> No Records Found, please search another
                                                                        </Col>}
      </WOWContext.Consumer>
    </Row>
  )
}

export default WOWList
