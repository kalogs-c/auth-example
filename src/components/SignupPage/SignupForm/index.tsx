import Link from "next/link";

import FormInput from "@components/Communs/FormInput";
import Form from "@components/Communs/Form";
import SubmitButton from "@components/Communs/SubmitButton";

import { DontHaveAcount, NameWrapper } from "./styles";

function LoginForm() {
  return (
    <Form>
      <NameWrapper>
        <FormInput type="text" placeholder="Name" name="name" />
        <FormInput type="text" placeholder="Last name" name="lastName" />
      </NameWrapper>
      <FormInput type="text" placeholder="Username" name="username" />
      <FormInput type="password" placeholder="Password" name="password" />
      <SubmitButton content="Sign up" />
      <DontHaveAcount>
        Already have an account? <Link href="/">Login</Link>
      </DontHaveAcount>
    </Form>
  );
}

export default LoginForm;
