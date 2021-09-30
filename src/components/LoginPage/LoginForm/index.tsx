import Link from "next/link";

import FormInput from "@components/Communs/FormInput";
import Form from "@components/Communs/Form";
import SubmitButton from "@components/Communs/SubmitButton";

import { DontHaveAcount } from "./styles";

function LoginForm() {
  return (
    <Form>
      <FormInput type="text" placeholder="Username" name="username" />
      <FormInput type="password" placeholder="Password" name="password" />
      <SubmitButton content="Login" />
      <DontHaveAcount>
        Dont have an account?{" "}<Link href="/signup">Sign up</Link>
      </DontHaveAcount>
    </Form>
  );
}

export default LoginForm;
