import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./messageForm.css";

function MessageForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {" "}
      <div className="message-output"> </div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={11}>
            <Form.Control type="text"></Form.Control>
          </Col>
          <Col md={1}>
            <Button
              variant="primary"
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "orange",
                minWidth: "50px",
              }}
            >
              <i className="fas fa-paper-plane"></i>
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default MessageForm;
