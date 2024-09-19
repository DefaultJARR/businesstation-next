import { EnumDeviceMediaQuery } from "@/responsive/device-size";
import { rgba } from "polished";
import styled from "styled-components";

export const StyledSidebarGroup = styled.div`
  @media ${EnumDeviceMediaQuery.MobileS} {
    width: 100%;
  }
`;

export const SidebarGroupTitle = styled.div<{ $status: boolean }>`
  @media ${EnumDeviceMediaQuery.MobileS} {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;

    .group-label {
      display: flex;
      align-items: center;
      gap: 10px;

      .title {
        font-size: 1em;
        line-height: 0.7em;
        white-space: nowrap;
      }
    }

    .group-toggle-arrow {
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;

      ${(props) =>
        props.$status &&
        `
        transform: rotate(180deg);
      `}
    }

    &:hover {
      .group-toggle-arrow {
        background-color: ${(props) => rgba(props.theme.Primary.Color, 0.35)};
      }
    }
  }
`;

export const SidebarGroupContent = styled.div<{ $status: boolean }>`
  @media ${EnumDeviceMediaQuery.MobileS} {
    max-height: 300px;
    padding: 5px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    background-color: ${(props) => rgba(props.theme.Primary.Color, 0.35)};
    overflow-y: auto;
    border-radius: 5px;

    /* Toggle Collapse */
    height: auto;
    ${(props) =>
      !props.$status &&
      `
      opacity:0;
      padding: 0;
      height: 0;
    `}
  }
`;
