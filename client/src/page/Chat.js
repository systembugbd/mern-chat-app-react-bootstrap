import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MessageForm from "../component/messageForm";
import Sidebar from "../component/sidebar";

function Chat() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <h3>Available Rooms</h3>
          <Sidebar />
        </Col>
        <Col md={8}>
          <h3>Message</h3>
          <MessageForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Chat;
