import React from "react";
import Alert from "react-bootstrap/Alert";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./home.css";
import { Link } from "react-router-dom";

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
              <Link
                to="/chat"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Chat now
              </Link>
            </Button>
          </Alert>
        </Col>
        <Col md={4}>
          <div className="right-img">
            <img src="https://images.unsplash.com/photo-1668248949793-12718a4dd485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
