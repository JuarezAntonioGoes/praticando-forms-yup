import styled, { keyframes } from "styled-components";

const animationModal = keyframes`
  from{ 
    opacity:0;
    transform: translatey(-15px);
  }
  to{ 
    opacity:initial;
    transform: initial;
  }
`;

const Modal = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  padding: 2rem;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  animation: ${animationModal} 0.4s forwards;
`;

export default Modal;
