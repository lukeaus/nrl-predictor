import React from 'react'
import shuffle from 'lodash/shuffle'
import { Card, CardText, CardBody, Row, Col } from 'reactstrap'

import { PUNDITS, PUNDIT_COMMENTS } from '../content'

export default () => {
  const punditComments = shuffle(PUNDIT_COMMENTS)

  const renderPundits = () => {
    return PUNDITS.map((pundit, index) => {
      return (
        <Col sm="3">
          <Card>
            <img
              style={{ margin: '0 auto' }}
              width="120px"
              src={require(`../images/pundits/small/${pundit.toLowerCase()}.jpg`)}
            />
            <CardBody>
              <CardText>
                <em>{punditComments[index]}</em>
              </CardText>
              <CardText>
                <strong>{pundit}</strong>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      )
    })
  }

  return (
    <div>
      <h3 style={{ marginBottom: '1rem' }}>Our Experts</h3>
      <Row>{renderPundits()}</Row>
    </div>
  )
}
