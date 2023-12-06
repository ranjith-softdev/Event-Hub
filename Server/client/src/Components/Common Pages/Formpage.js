import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Formpage.css";
import { Container, Row, Col } from "react-bootstrap";

const Formpage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [department, setDepartment] = useState("");
  const [college, setCollege] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Create an object with the data
    const userData = {
      name,
      rollNo,
      department,
      college,
      phoneNo,
      email
    };

    // Convert the object to a JSON string
    const requestBody = JSON.stringify(userData);

    fetch("http://localhost:5000/event-user-register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // Set the content type to JSON
      },
      body: requestBody // Send the JSON string as the request body
    })
      .then((response) => {
        if (response.ok) {
          return response.json().then((data) => {
            // Assuming your response JSON contains a "message" field
            console.log("Response Data:", data);
            alert("Registration successful: " + data.message);
            navigate("/");
          });
        } else {
          throw new Error("Registration failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Registration failed: " + error.message);
      });
  };

  return (
    <Container>
      <Row>
        <Col xs={12} className="pt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="form-content">
                  <div className="form-items">
                    <h3>Register Now</h3>
                    <p>Fill in the data below.</p>
                    <form className="requires-validation" noValidate>
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <div className="valid-feedback">
                          Username field is valid!
                        </div>
                        <div className="invalid-feedback">
                          Username field cannot be blank!
                        </div>
                      </div>

                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="rollNo"
                          placeholder="Roll No"
                          required
                          value={rollNo}
                          onChange={(e) => {
                            setRollNo(e.target.value);
                          }}
                        />
                        <div className="valid-feedback">
                          Username field is valid!
                        </div>
                        <div className="invalid-feedback">
                          Username field cannot be blank!
                        </div>
                      </div>

                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="department"
                          placeholder="Department"
                          required
                          value={department}
                          onChange={(e) => {
                            setDepartment(e.target.value);
                          }}
                        />
                        <div className="valid-feedback">
                          Username field is valid!
                        </div>
                        <div className="invalid-feedback">
                          Username field cannot be blank!
                        </div>
                      </div>

                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="college"
                          placeholder="College"
                          required
                          value={college}
                          onChange={(e) => {
                            setCollege(e.target.value);
                          }}
                        />
                        <div className="valid-feedback">
                          Username field is valid!
                        </div>
                        <div className="invalid-feedback">
                          Username field cannot be blank!
                        </div>
                      </div>

                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="number"
                          name="mobileNo"
                          placeholder="Mobile No"
                          required
                          value={phoneNo}
                          onChange={(e) => {
                            setPhoneNo(e.target.value);
                          }}
                        />
                        <div className="valid-feedback">
                          Username field is valid!
                        </div>
                        <div className="invalid-feedback">
                          Username field cannot be blank!
                        </div>
                      </div>

                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="E-mail Address"
                          required
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        <div className="valid-feedback">
                          Email field is valid!
                        </div>
                        <div className="invalid-feedback">
                          Email field cannot be blank!
                        </div>
                      </div>

                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                          required
                        />
                        <label className="form-check-label">
                          I confirm that all data are correct
                        </label>
                        <div className="invalid-feedback">
                          Please confirm that the entered data are all correct!
                        </div>
                      </div>

                      <div className="form-button mt-3">
                        <button
                          id="submit"
                          type="submit"
                          className="btn btn-primary"
                          onClick={handleRegister}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Formpage;
