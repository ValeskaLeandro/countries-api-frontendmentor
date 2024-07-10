import styled from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;
  width: 200px;
  `;

export const SelectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
  background-color: ${props => props.theme.colors.elementsColor};
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: .3rem;
`;

export const SelectList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.elementsColor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  overflow: hidden;
`;

export const SelectListItem = styled.li`
  padding: .3rem 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.inputColor};
  }
`;
