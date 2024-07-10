import styled from "styled-components";

export const CountryPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;

  a {
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 1rem;
    background-color: ${props => props.theme.colors.elementsColor};
    padding: .5rem 1rem;
    border-radius: 5px;
    width: 120px;
    margin: 3.5rem 0;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
  }
`

export const CountryPageContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;

  @media (max-width: 1200px) {
    gap: 5rem;
  }
  @media (max-width: 1100px)  {
    flex-direction: column;
    gap: 3rem;
  }
`

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1100px){
    max-width: 100%;
    max-height: 100%;
  }
`;

export const InfosContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  h1 {
    margin-bottom: 1rem;
  }
  .containerInfos {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
     & > p {
      font-size: 14px;
        & > span {
          font-weight: 800;
        }
      }
    }

    @media (max-width: 1100px) {
      flex-direction: column;
      gap: 2rem;
      padding-bottom: 2rem;
    }
  }
`
export const BorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-weight: 800;
  }
  .box {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .box .borderItem {
    background-color: ${props => props.theme.colors.elementsColor};
    padding:.3rem 1rem;
    font-size: 12px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
  }
`
