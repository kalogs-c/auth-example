import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  height: 100vh;
  margin: 0 0.5rem;
`;

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

export const Title = styled.h1`
  color: #fff;
`;

export const Subtitle = styled.span`
  color: ${({ theme }) => theme.colors.subtitles};
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
`;
