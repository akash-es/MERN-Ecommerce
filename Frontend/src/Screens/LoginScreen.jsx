import { useState, useEffect } from "react";
import FormContainer from "../components/FormContainer";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom"
import { useLoginUserMutation } from "../Slice/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../Slice/authSlice";
import { toast } from "react-toastify";
function LoginScreen() {

  const { userData } = useSelector((state) => state.auth)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [loginuser] = useLoginUserMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await loginuser({ email, password }).unwrap();

      toast.success("login success");

      dispatch(setCredentials(res));
      navigate('/')
    } catch (error) {
      console.log(error?.data?.message || error?.message);
    }
  };


  useEffect(() => {
    if (userData) {
      navigate('/')
    }
  }, [])

  return (
    <FormContainer>
      <h1>Sign In</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New Customer? <Link to={"/register"}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
}




export default LoginScreen