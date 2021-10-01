import { useRef } from "react";
import router from "next/router";

import Link from "next/link";
import FormInput from "@components/Communs/FormInput";
import Form from "@components/Communs/Form";
import SubmitButton from "@components/Communs/SubmitButton";

import { DontHaveAcount } from "./styles";

function LoginForm() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const username: string = usernameRef.current.value;
    const password: string = passwordRef.current.value;

    const data: object = {
      username,
      password,
    };

    fetch("/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (res) => {
      const { message } = await res.json();
      res.status === 200 ? router.push("/treasure") : console.log(message);
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput type="text" placeholder="Username" ref={usernameRef} />
      <FormInput type="password" placeholder="Password" ref={passwordRef} />
      <SubmitButton content="Login" />
      <DontHaveAcount>
        Dont have an account? <Link href="/signup">Sign up</Link>
      </DontHaveAcount>
    </Form>
  );
}

export default LoginForm;
