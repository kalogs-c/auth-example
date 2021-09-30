import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  height: 100vh;
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
`;
