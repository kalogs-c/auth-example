import { Button } from "./styles";

interface ButtonProps {
  content: string;
}

function SubmitButton({ content }: ButtonProps) {
  return <Button>{content}</Button>;
}

export default SubmitButton;
