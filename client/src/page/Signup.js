import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./signup.css";
import { useState } from "react";
import botImg from "./../assets/images/bot.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  //Form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Upload image
  const [image, setImage] = useState("");
  const [uploadingImg, setUploadingImg] = useState(false);
  const [uploadImagePreview, setUploadImagePreview] = useState(null);

  const onChangeImageHandler = (files) => {
    if (files.size >= 524288) {
      toast("File size limit exceded, Allowed only upto 1MB size");
      return;
    }
    setImage(files);
    setUploadImagePreview(URL.createObjectURL(files));
  };

  const uploadImage = async (files) => {
    const data = new FormData();
    data.append("file", image);
    //chat_image_assets cloudinary.com image upload location
    data.append("upload_preset", "e4irvbnb");
    data.append("options", {});

    try {
      setUploadingImg(true);
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/shaheb/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const urlData = await res.json();
      setUploadingImg(false);

      return urlData.url;
    } catch (error) {
      toast(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return toast("Please select a profile image!");
    const imageUrl = await uploadImage(image);
  };

  return (
    <Container>
      <Row>
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <ToastContainer />
          <Form className="d-flex  flex-column w-75" onSubmit={handleSubmit}>
            <div className="signup-profile-pic__container">
              <img
                src={uploadImagePreview || botImg}
                className="signup-profile-pic"
              />
              <label
                htmlFor="signup-profile-pic"
                className="signup-profile-pic__lable"
              >
                <i
                  className={`fas fa-plus-circle ${
                    uploadingImg && "uploading"
                  }`}
                ></i>
              </label>
              <input
                type="file"
                accept="image/png, image/jpeg"
                id="signup-profile-pic"
                hidden
                onChange={(e) => onChangeImageHandler(e.target.files[0])}
              />
            </div>

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
              {(uploadingImg && "Uploading image ....") || "Signup"}
            </Button>
          </Form>
          <Link to="/login" className="mb-3">
            Already have an account? Login now
          </Link>
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
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
