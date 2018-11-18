import React from 'react'
import { Card, CardBody, CardText, Row, Col } from 'reactstrap'

const WOWCard = (props) => {
  const {imageURL, ratings, likes, place, description} = props
  return (<Card>
            <CardBody>
              <img width='100%' src={imageURL} alt='' />
              <Row>
                <Col> Ratings:
                {ratings}
                </Col>
                <Col>
                {place}
                </Col>
              </Row>
              <Row>
                <Col>
                <CardText>
                  {likes}
                </CardText>
                <CardText>
                  {description}
                </CardText>
                </Col>
              </Row>
            </CardBody>
          </Card>)
}

export default WOWCard
