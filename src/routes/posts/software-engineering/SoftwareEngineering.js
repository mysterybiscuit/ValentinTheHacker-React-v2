import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const SoftwareEngineering = () => {
  return (
    <div>
      <h1>Software Engineering</h1>
      <Row>
        <Col md={{ size: 4, offset: 1 }} sm={{ size: 8, offset: 2 }}>
          <Link to="/posts/software-engineering/software-engineering">
            <Card>
              <CardHeader>
                <h1>Software Engineering</h1>
              </CardHeader>
              <CardBody>
                <CardSubtitle>
                  <h4>The art of design</h4>
                </CardSubtitle>
                <p>
                  How does one design a program? What are the prerequisites? How does the development process go?
                </p>
              </CardBody>
            </Card>
          </Link>
        </Col>
        <Col md={{ size: 4, offset: 1 }} sm={{ size: 8, offset: 2 }}>
          <Link to="/posts/software-engineering/programming">
            <Card>
              <CardHeader>
                <h1>Programming</h1>
              </CardHeader>
              <CardBody>
                <CardSubtitle>
                  <h4>The art of development</h4>
                </CardSubtitle>
                <p>
                  How does one create application?
                </p>
              </CardBody>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  )
}

export default SoftwareEngineering
