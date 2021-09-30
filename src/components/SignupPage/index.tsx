import {
  Container,
  TitlesContainer,
  Title,
  Subtitle,
} from "@components/Communs/TitlesAndContainers";
import SignupForm from "./SignupForm";

export default function SignupPage() {
  return (
    <>
      <Container>
        <TitlesContainer>
          <Title>Sign up</Title>
          <Subtitle>Sign up to see a big treasure!</Subtitle>
        </TitlesContainer>
        <SignupForm />
      </Container>
    </>
  );
}
