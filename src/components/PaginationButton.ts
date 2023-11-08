import styled, { css } from 'styled-components';

interface IPaginationButtonProps {
  isActive?: boolean;
}

export const PaginationButton = styled.button<IPaginationButtonProps>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray; 
  color: black;

  &[disabled] {
    background-color: gray;
    cursor: not-allowed;
  }
  svg {
    text-align: center;
  }
  &:hover {
    background-color: white;
  }

  ${({ isActive }) => isActive
    && css`
      background-color: orange;
      font-weight: bold;
    `}
`;

PaginationButton.defaultProps = {
  isActive: false,
};
