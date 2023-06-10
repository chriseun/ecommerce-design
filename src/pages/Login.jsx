import React from "react";
import styled from "styled-components";
import LoginImage from "../images/login-page.jpg"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${LoginImage});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #fff;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;

`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;

`

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;

`

const Login = () => {
  return (
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="Username"/>
            <Input placeholder="Password"/>
            <Button>LOGIN</Button>
            <Link>Forgot Password?</Link>
             <Link>Create New Account</Link>
          </Form>
        </Wrapper>
      </Container>
  );
}

export default Login;
