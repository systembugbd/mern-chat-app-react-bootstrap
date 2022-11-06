import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <Container>
      <Row>
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <Form className="d-flex  flex-column w-75">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter email or Username" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="mb-3">
              Signup
            </Button>
          </Form>
          <Link to="/login" className="mb-3">
            Already have an account? Login now
          </Link>
        </Col>
        <Col md={6}>
          <img
            style={{ width: "100%", height: "auto" }}
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
