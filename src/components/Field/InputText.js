import styled from "styled-components";

const InputText = styled.input`
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1.1rem;
  flex-grow: 1;
  margin-left: 0.5rem;
  color: ${(props) => (props.error ? "red" : "#252525")};

  &:focus {
    border: 1px solid #ffd600;
  }
`;

export default InputText;
