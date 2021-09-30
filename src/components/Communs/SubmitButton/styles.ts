import styled from "styled-components";

export const Button = styled.button`
  padding: 1rem;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  border: none;
  border-radius: 7px;
  width: 100%;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;
