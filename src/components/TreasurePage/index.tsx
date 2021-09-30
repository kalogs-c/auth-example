import {
  Container,
  TitlesContainer,
  Title,
  Subtitle,
} from "@components/Communs/TitlesAndContainers";
import SubmitButton from "@components/Communs/SubmitButton";

function TreasurePage() {
  return (
    <Container>
      <TitlesContainer>
        <Title>And the treasure is...</Title>
        <Subtitle>You will never know! 😈</Subtitle>
      </TitlesContainer>
      <SubmitButton content="Delete my account" />
    </Container>
  );
}

export default TreasurePage;
