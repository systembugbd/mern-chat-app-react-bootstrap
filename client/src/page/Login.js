import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container>
      <Row>
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <Form className="d-flex  flex-column w-75">
            <Form.Group className="mb-3 my-5" controlId="formBasicEmail">
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mb-3">
              Login
            </Button>
          </Form>
          <Link to="/signup" className="mb-3">
            Don't have any account? Signup now
          </Link>
        </Col>

        <Col md={6}>
          <img
            style={{ width: "100%", height: "auto" }}
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Login;