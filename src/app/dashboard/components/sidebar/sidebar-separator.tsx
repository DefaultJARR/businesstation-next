import { EnumDeviceMediaQuery } from "@/responsive/device-size";
import React from "react";
import styled from "styled-components";

export const StyledSidebarSeparator = styled.div<{ color: string }>`
  @media ${EnumDeviceMediaQuery.MobileS} {
    width: 100%;
    color: ${({ color }) => color};
    position: relative;
    opacity: 0.4;
    white-space: nowrap;

    span {
      display: inline-block;
      width: 100% !important;
      height: 2px !important;
      background-color: ${({ color }) => color} !important;
    }

    p {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${({ theme }) => theme.Secondary.Color};
      padding: 0 5px;
    }
  }
`;

export default function SidebarSeparator(props: any) {
  return (
    <StyledSidebarSeparator color={props.color}>
      <span></span>
      <p>{props.text}</p>
    </StyledSidebarSeparator>
  );
}
