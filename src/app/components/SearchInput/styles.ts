import styled from "styled-components";


export const InputContainer = styled.div`
  background-color: ${props => props.theme.colors.elementsColor};
  padding: 1rem 1.5rem;
  width: 100%;
  max-width: 450px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);

`
export const InputSearch = styled.input`
  border: none;
  outline: none;
  background: none;
  width: 100%;
  color: ${props => props.theme.colors.textColor};

  &::placeholder {
    color: ${props => props.theme.colors.textColor};
  }
`