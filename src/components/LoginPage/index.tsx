import { Container, TitlesContainer, Title, Subtitle } from "./styles";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <>
      <Container>
        <TitlesContainer>
          <Title>Login</Title>
          <Subtitle>Login to see a big treasure!</Subtitle>
        </TitlesContainer>
        <LoginForm />
      </Container>
    </>
  );
}
