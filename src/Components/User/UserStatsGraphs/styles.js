import styled from "styled-components";

export const Graph = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  .graphItem {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 0.2rem;
    display: grid;
    align-items: center;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }
`;

export const Total = styled.div`
  grid-column: 1/3;
  padding: 2rem;
  font-size: 2rem;

  @media (max-width: 40rem) {
    grid-column: 1;
  }
`;
