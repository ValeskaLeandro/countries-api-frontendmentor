import styled from "styled-components";

export const TopContainer = styled.div`
  width: 90%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0
`
export const GridCountries = styled.div`
  width: 90%;
  max-width: 1440px;
  display: flex;
  gap: 4rem 5rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export const PagesContainer = styled.div`
  padding: 2rem 1rem;
  display: flex;
  gap: .3rem;

  button{
    padding: 1rem;
    background-color: ${props => props.theme.colors.elementsColor};
    border: none;
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    color: ${props => props.theme.colors.textColor};
  }

  button:disabled {
    cursor: none;
    background: none;
    box-shadow: none;
  }
`