import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HeaderContainer = styled.header`
  width: 100%;
  height: 90px;
  background-color: ${props => props.theme.colors.elementsColor};

  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
`

export const HeaderContent = styled.div`
  width: 90%;
  max-width: 1440px;
  display: flex;
  align-items: center;  
  justify-content: space-between;
`

export const ButtonTheme =  styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .3rem;
  font-size: 16px;
  cursor: pointer;
`