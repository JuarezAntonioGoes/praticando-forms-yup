import styled from "styled-components";

const CloseModal = styled.button`
  position: absolute;
  top: -15px;
  right: -15px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 2px solid #fff;
  box-shadow: 0 0 0 2px red;
  background-color: red;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #b71c1c;
  }
`;

export default CloseModal;
