import React from 'react';
import { EnumDeviceMediaQuery } from '../responsive/device-size';
import styled from 'styled-components';

export const StyledBubbleButton = styled.button<{ size: string }>`
  @media ${EnumDeviceMediaQuery.MobileS} {
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.Primary.Color};
    color: ${(props) => props.theme.Primary.Color};
    border: none;
    border-radius: ${(props) => props.size};
    cursor: pointer;
  }

  @media ${EnumDeviceMediaQuery.Tablet} {
    /* min-width: 30px;
    min-height: 30px; */
  }
`;

interface BubbleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $icon: string;
  size: string;
}

export const BubbleButton: React.FC<BubbleButtonProps> = (props) => {
  return (
    <StyledBubbleButton {...props} size={props.size}>
      <span className="material-symbols-outlined">{props.$icon}</span>
    </StyledBubbleButton>
  );
};
