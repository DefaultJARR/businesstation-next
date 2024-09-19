import styled from "styled-components";
import Image from "next/image";
import { StyledBlankPage } from "@/layouts/blank-page.layout";
import { EnumDeviceMediaQuery } from "@/responsive/device-size";
import { StyledButtonBase } from "@/components/button-base.styles";

export const StyledLoginPage = styled(StyledBlankPage)`
  @media ${EnumDeviceMediaQuery.MobileS} {
    background-color: ${(props) => props.theme.Primary.Color};
  }
`;

// Background
export const LoginBackgroundImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LoginBackgroundGlass = styled.div`
  @media ${EnumDeviceMediaQuery.MobileS} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

// Card
export const LoginCard = styled.div`
  @media ${EnumDeviceMediaQuery.MobileS} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    height: 80vh;
    background-color: white;
    border-radius: 20px;

    display: grid;
    grid-template-rows: 1fr 35px;

    overflow: hidden;
  }

  @media ${EnumDeviceMediaQuery.Tablet} {
    width: 800px;
    height: 60vh;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
`;

// Left Side
export const LeftSide = styled.div`
  padding: 20px;
  overflow-x: hidden;
  word-wrap: break-word;

  p {
    color: ${({ theme }) => theme.Primary.Color};
  }
`;

export const LoginTitle = styled.h2<{ color: string }>`
  font-size: 1.5rem;
  color: ${({ color }) => color} !important;
`;

export const LoginForm = styled.form`
  width: 100%;
  margin: 20px 0;
`;

export const LoginChangeMethod = styled(StyledButtonBase)<{ color: string }>`
  margin-bottom: 20px;
  width: 100%;
  background-color: ${({ color }) => color};
  border: 1px solid ${({ color }) => color};
  color: #fff;
  transition: all 300ms ease-in-out;
  font-weight: bold;
`;

export const LoginRecoverText = styled.p`
  font-size: 0.75em;
  text-align: center;
`;

// Right Side
export const RightSide = styled.div<{ color: string }>`
  @media ${EnumDeviceMediaQuery.MobileS} {
    background-color: ${({ color }) => color};
    overflow: hidden;

    img {
      display: none;
    }
  }

  @media ${EnumDeviceMediaQuery.Tablet} {
    /* padding: 10px; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    color: ${(props) => props.theme.Secondary.Color};
    font-size: 2em;

    img {
      width: 50%;
      height: auto;
      display: block;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
`;

// Footer
export const LoginFooterMark = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 10px;
  font-size: 1em;
  opacity: 0.6;

  display: flex;
  justify-content: center;
  align-items: center;

  * {
    color: white;
    text-decoration: none;
    white-space: nowrap;
  }

  svg {
    fill: red;
  }
`;
