import React, { useState } from "react";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";

export default function SignIn() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In </Form.Title>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
