import React from 'react'
import { Row, Col } from 'reactstrap'
import WOWContext from '../../store.js'

const SortBar = () => {
  return (<WOWContext.Consumer>
            {ctx => (<Row>
                       <Col>
                       <strong>Total Likes:</strong>
                       {ctx.likesCount}
                       </Col>
                       <Col>
                       <strong>API Hits:</strong>
                       {ctx.apiCount}
                       </Col>
                     </Row>)}
          </WOWContext.Consumer>)
}

export default SortBar
