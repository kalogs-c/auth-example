import { useRef } from "react";

import Link from "next/link";
import FormInput from "@components/Communs/FormInput";
import Form from "@components/Communs/Form";
import SubmitButton from "@components/Communs/SubmitButton";

import { DontHaveAcount, NameWrapper } from "./styles";

function SignupForm() {
  const nameRef = useRef(null);
  const lastNameRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name: string = nameRef.current.value;
    const lastName: string = lastNameRef.current.value;
    const username: string = usernameRef.current.value;
    const password: string = passwordRef.current.value;

    const data: object = {
      name,
      lastName,
      username,
      password,
    };

    fetch("/api/createUser", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (res) => {
      const { message } = await res.json();
      console.log(message);
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <NameWrapper>
        <FormInput type="text" placeholder="Name" ref={nameRef} />
        <FormInput type="text" placeholder="Last name" ref={lastNameRef} />
      </NameWrapper>
      <FormInput type="text" placeholder="Username" ref={usernameRef} />
      <FormInput type="password" placeholder="Password" ref={passwordRef} />
      <SubmitButton content="Sign up" />
      <DontHaveAcount>
        Already have an account? <Link href="/">Login</Link>
      </DontHaveAcount>
    </Form>
  );
}

export default SignupForm;
