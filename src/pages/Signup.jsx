import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";

import "../styles/login.css";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Helmet title="Signup">
      <section>
        <Container>
          <Col lg="6" className="m-auto text-center">
            <h3 className="fw-bold mb-4">Sign-up</h3>

            <Form className="auth__form">
              <FormGroup className="form__group">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="form__group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="form__group">
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>

              <button
                type="submit"
                className="buy__btn

login__btn auth__btn"
              >
                Signup
              </button>

              <p>
                Already have an account? Create an account
                <Link to="/login">Login</Link>
              </p>
            </Form>
          </Col>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
