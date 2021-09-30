import styled from "styled-components";

const FormInput = styled.input`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  border: none;
  border-radius: 7px;
  width: 100%;
  color: #ffffff;

  &::placeholder {
    font-weight: 600;
    color: #808080;
  }
`;

export default FormInput;
