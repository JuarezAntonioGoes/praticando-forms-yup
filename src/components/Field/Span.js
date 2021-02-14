import styled from "styled-components";

const Span = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${(props) => (props.error ? "red" : "#fff")};
`;

export default Span;
