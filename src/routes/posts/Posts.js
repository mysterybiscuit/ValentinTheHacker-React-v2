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

const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>
      <Row>
        <Col md={{ size: 4, offset: 1 }} sm={{ size: 8, offset: 2 }}>
          <Link to="/posts/pentesting">
            <Card>
              <CardHeader>
                <h1>Pentesting</h1>
              </CardHeader>
              <CardBody>
                <CardSubtitle>
                  <h4>The art of hacking</h4>
                </CardSubtitle>
                <p>
                  How does legal hacking work? What do you do? What are the
                  steps involved?
                </p>
              </CardBody>
            </Card>
          </Link>
        </Col>
        <Col md={{ size: 4, offset: 1 }} sm={{ size: 8, offset: 2 }}>
          <Link to="/posts/software-engineering">
            <Card>
              <CardHeader>
                <h1>Software Engineering</h1>
              </CardHeader>
              <CardBody>
                <CardSubtitle>
                  <h4>The art of development</h4>
                </CardSubtitle>
                <p>
                  How does an application take shape? What do you design an
                  application? How do you program one?
                </p>
              </CardBody>
            </Card>
          </Link>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={{ size: 4, offset: 1 }} sm={{ size: 8, offset: 2 }}>
          <Link to="/posts/data-science">
            <Card>
              <CardHeader>
                <h1>Data Science</h1>
              </CardHeader>
              <CardBody>
                <CardSubtitle>
                  <h4>The art of big data</h4>
                </CardSubtitle>
                <p>
                  What is Big Data? How does one deal with it? Why should you
                  care?
                </p>
              </CardBody>
            </Card>
          </Link>
        </Col>
        <Col md={{ size: 4, offset: 1 }} sm={{ size: 8, offset: 2 }}>
          <Link to="/posts/networking">
            <Card>
              <CardHeader>
                <h1>Networking</h1>
              </CardHeader>
              <CardBody>
                <CardSubtitle>
                  <h4>The art of defense</h4>
                </CardSubtitle>
                <p>
                  How does make a network? How do they work? How does one secure
                  it?
                </p>
              </CardBody>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Posts;
