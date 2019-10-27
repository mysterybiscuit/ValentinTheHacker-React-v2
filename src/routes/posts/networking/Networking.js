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

const Networking = () => {
  return (
    <div>
      <h1>Networking</h1>
      <p><i>I will attempt to cover the CompTIA Networking+ N10-007 exam here</i></p>
      <Row>
        <Col md={{ size: 4, offset: 1 }} sm={{ size: 8, offset: 2 }}>
          <Link to="/posts/networking/networking-concepts">
            <Card>
              <CardHeader>
                <h1>Networking Concepts</h1>
              </CardHeader>
              <CardBody>
                <CardSubtitle>
                  <h4>The art of basic networking</h4>
                </CardSubtitle>
                <p>Ports, Protocols, OSI Layers, Routing, Switches, IP Addressing, Topologies, Types, Technologies, Wired, Wireless, Cloud, Services</p>
              </CardBody>
            </Card>
          </Link>
        </Col>
        <Col md={{ size: 4, offset: 1 }} sm={{ size: 8, offset: 2 }}>
          <Link to="/posts/networking/infrastructure">
            <Card>
              <CardHeader>
                <h1>Infrastructure</h1>
              </CardHeader>
              <CardBody>
                <CardSubtitle>
                  <h4>The art of infrastructure</h4>
                </CardSubtitle>
                <p>Cabling solutions, Network devices, Advanced Network devices, Virtualisation, Network storage, WAN</p>
              </CardBody>
            </Card>
          </Link>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={{ size: 4, offset: 1 }} sm={{ size: 8, offset: 2 }}>
          <Link to="/posts/networking/network-operations">
            <Card>
              <CardHeader>
                <h1>Network Operations</h1>
              </CardHeader>
              <CardBody>
                <CardSubtitle>
                  <h4>The art of operations</h4>
                </CardSubtitle>
                <p>Documentation, Diagrams, Business Continuity, Disaster Recovery Concepts, Scanning, Monitoring, Patching, Remote Access Methods, Policies, Best Practices</p>
              </CardBody>
            </Card>
          </Link>
        </Col>
        <Col md={{ size: 4, offset: 1 }} sm={{ size: 8, offset: 2 }}>
          <Link to="/posts/networking/network-security">
            <Card>
              <CardHeader>
                <h1>Network Security</h1>
              </CardHeader>
              <CardBody>
                <CardSubtitle>
                  <h4>The art of defence</h4>
                </CardSubtitle>
                <p>Physical Security Devices, Authentication, Access Controls, Basic Wireless Network Security, Common Networking Attacks, Network Device Hardening, Mitigation Techniques</p>
              </CardBody>
            </Card>
          </Link>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={{ size: 4, offset: 4 }} sm={{ size: 8, offset: 2 }}>
          <Link to="/posts/networking/network-troubleshooting-and-tools">
            <Card>
              <CardHeader>
                <h1>Network Troubleshooting and Tools</h1>
              </CardHeader>
              <CardBody>
                <CardSubtitle>
                  <h4>The art of fixing</h4>
                </CardSubtitle>
                <p>Network Troubleshooting, Tools, Wired Connectivity Issues, Wireless Connectivity Issues, Performance Issues, Network Service Issues</p>
              </CardBody>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Networking;
