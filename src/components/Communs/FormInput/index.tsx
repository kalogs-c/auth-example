import { Input } from "./styles";

interface FormInputProps {
  type: string;
  placeholder: string;
  name: string;
}

function FormInput({ type, placeholder, name }: FormInputProps) {
  return <Input type={type} placeholder={placeholder} name={name} required />;
}

export default FormInput;
