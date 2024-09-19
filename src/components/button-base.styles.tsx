import styled from 'styled-components';

export const StyledButtonBase = styled.button<{
  width?: string;
  color?: string;
}>`
  width: ${({ width }) => width || 'auto'};
  height: 30px;
  padding-left: 12px;
  padding-right: 12px;

  outline: none;
  border-radius: 20px;
  background-color: ${({ color, theme }) => color || theme.Primary.Color};
  border: 1px solid
    ${({ color, theme }) => color || theme.DefaultTextColor.Color};

  color: ${({ theme }) => theme.DefaultTextColor.Color};
  font-weight: bold;

  transition: all 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;
