import styled from "styled-components";
import { EnumDeviceMediaQuery } from "../responsive/device-size";

export const StyledBlankPage = styled.div`
  @media ${EnumDeviceMediaQuery.MobileS} {
    position: relative;
    min-width: 100vw;
    max-width: 100vw;
    width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    height: 100vh;
  }
`;
