import styled from "styled-components";

export const DontHaveAcount = styled.span`
  font-size: 0.75rem;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.subtitles};
  text-align: center;
  a {
    color: #ffffff;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 320px) {
    flex-direction: row;
  }
`;
