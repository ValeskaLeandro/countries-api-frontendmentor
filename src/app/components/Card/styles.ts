import styled from "styled-components"

export const MainCard = styled.div`
  width: 300px;
  height: 380px;
  background-color: ${props => props.theme.colors.elementsColor};
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
  img {
    width: 300px;
    height: 200px;
  }
`

export const InfoCard = styled.div`
  padding: 1.5rem 1rem;

  h1 {
    font-size: 16px;
    margin-bottom: 1rem;
  }

  p {
    font-size: 14px;

    span {
      font-weight: 800;
    }
  }
`