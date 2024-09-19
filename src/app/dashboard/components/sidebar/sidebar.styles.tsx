import styled from "styled-components";
import { EnumDeviceMediaQuery } from "@/responsive/device-size";
import { EnumBaseColors } from "@/theme/entities/enum-base-colors";
import { SidebarStore } from "../../stores/sidebar.store";
import { DASHBOARD_HEADER_HEIGHT } from "../../dashboard.styles";

export const SidebarContainer = styled.nav<{ $sidebar: Partial<SidebarStore> }>`
  @media ${EnumDeviceMediaQuery.MobileS} {
    position: absolute;
    width: 80vw;
    height: 100vh;
    transition: 300ms all ease-out;
    transform: translateX(-100vw);
    ${(props) =>
      props.$sidebar.status === "open" && `transform: translateX(0);`}
    z-index: 10;
  }

  @media ${EnumDeviceMediaQuery.Tablet} {
    position: relative;
    width: ${(props) => props.$sidebar.width};
    transition: 300ms all ease-in-out;
    transform: none;
  }
`;

export const StyledSidebar = styled.nav<{ $sidebar: Partial<SidebarStore> }>`
  * {
    color: ${EnumBaseColors.White};
    font-size: 1rem;
  }

  @media ${EnumDeviceMediaQuery.MobileS} {
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.Secondary.Color};
    display: grid;
    grid-template-rows: ${DASHBOARD_HEADER_HEIGHT} 1fr;
    box-shadow: rgba(0, 0, 0, 0.9) 0 0 25px;
  }
`;

export const SidebarBackground = styled.div<{
  $sidebar: Partial<SidebarStore>;
}>`
  @media ${EnumDeviceMediaQuery.MobileS} {
    position: absolute;
    width: 100vw;
    height: 100%;
    background: ${EnumBaseColors.Black};
    opacity: 0.4;
    z-index: -1;
    transition: 100ms all linear;
    transform: translateX(-100vw);

    ${(props) =>
      props.$sidebar.status === "open" && `transform: translateX(0);`}
  }

  @media ${EnumDeviceMediaQuery.Tablet} {
    display: none;
  }
`;

export const SidebarHeader = styled.header`
  @media ${EnumDeviceMediaQuery.MobileS} {
    z-index: 10;
  }

  @media ${EnumDeviceMediaQuery.Tablet} {
    position: relative;
  }
`;

export const SidebarHeaderToggle = styled.button<{
  $sidebar: Partial<SidebarStore>;
}>`
  @media ${EnumDeviceMediaQuery.MobileS} {
    display: none;
  }

  @media ${EnumDeviceMediaQuery.Tablet} {
    position: absolute;
    right: 0;
    bottom: 0;
    overflow: visible;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.Secondary.Color};
    box-shadow: rgba(0, 0, 0, 0.8) 0 0 5px;

    span.sidebar-toggle {
      font-size: 15px;
      line-height: 15px;
      color: ${({ theme }) => theme.SecondaryContrast.Color};
    }

    &:hover {
      background-color: ${(props) => props.theme.Primary.Color};
    }

    /* styles based on $sidebar status */
    transform-origin: center;
    transform: translate(60%, 50%)
      ${(props) => props.$sidebar.status === "open" && "rotate(45deg)"};
  }
`;

export const SidebarBody = styled.section<{
  $sidebar: Partial<SidebarStore>;
}>`
  @media ${EnumDeviceMediaQuery.MobileS} {
    max-width: 100%;
    padding: 10px 5px 50px 10px;
    background-color: ${(props) => props.theme.Secondary.Color};
    display: flex;
    flex-direction: column;
    gap: 3px;
    opacity: ${(props) =>
      props.$sidebar.status === "open" || props.$sidebar.isHovered ? 1 : 0};
    overflow: hidden;
    overflow-y: auto;
  }
`;
