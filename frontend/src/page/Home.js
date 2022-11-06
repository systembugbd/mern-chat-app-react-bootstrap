import React from "react";
import Alert from "react-bootstrap/Alert";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./home.css";

function Home() {
  return (
    <Container className="home-bg">
      <Row>
        <Col
          md={8}
          className="d-flex justify-content-center align-items-center"
        >
          <Alert variant="info">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep
              things nice and tidy.
            </p>
            <Button variant="primary" className="my-5">
              Primary
            </Button>
          </Alert>
        </Col>
        <Col md={4}>
          <img
            src="https://images.unsplash.com/photo-1529310399831-ed472b81d589?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            style={{ width: "100%", height: "90vh" }}
            className="light-img"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
