import styled from "styled-components";

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  @media (max-width: 780px) {
    flex-direction: column;
    align-items: initial;
    gap: 2.5rem;
  }
`