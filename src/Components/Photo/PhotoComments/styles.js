import styled from "styled-components";

export const Comments = styled.ul`
  overflow-y: auto;
  word-break: break-word;
  padding: 0 2rem;

  &.single {
    padding: 0px;
  }

  li {
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }
`;
