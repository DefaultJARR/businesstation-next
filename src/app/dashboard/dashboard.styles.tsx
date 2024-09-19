import styled from 'styled-components';
import { EnumDeviceMediaQuery } from '@/responsive/device-size';
import { SIDEBAR_COLLAPSED_WIDTH, SidebarStore } from './stores/sidebar.store';

export const DASHBOARD_HEADER_HEIGHT = '50px';

export const DashboardWarpper = styled.div<{
  $sidebar: Partial<SidebarStore>;
}>`
  @media ${EnumDeviceMediaQuery.MobileS} {
    width: 100vw;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    background-color: ${(props) => props.theme.Primary.Color};
  }

  @media ${EnumDeviceMediaQuery.Tablet} {
    grid-template-columns: ${(props) =>
        props.$sidebar.status === 'open'
          ? props.$sidebar.width
          : SIDEBAR_COLLAPSED_WIDTH} 1fr;
  }
`;

// Dashboard Content
export const DashboardContent = styled.div`
  @media ${EnumDeviceMediaQuery.MobileS} {
    display: grid;
    grid-template-rows: ${DASHBOARD_HEADER_HEIGHT} calc(
        100vh - ${DASHBOARD_HEADER_HEIGHT}
      );
  }
`;

export const DashboardHeader = styled.header`
  @media ${EnumDeviceMediaQuery.MobileS} {
    display: flex;
    align-items: center;
    background: ${(props) => props.theme.Primary.Color};
    padding: 0 20px;

    .login-btn {
      margin-left: auto; // align to the right inside flex container
    }
  }
`;

export const DashboardHeaderOpenSidebarBtn = styled.button<{
  $sidebar: Partial<SidebarStore>;
}>`
  @media ${EnumDeviceMediaQuery.MobileS} {
    display: inline-block;
    background-color: transparent;
    height: 100%;
  }
  @media ${EnumDeviceMediaQuery.Tablet} {
    display: none;
  }
`;

export const DashboardBody = styled.div`
  @media ${EnumDeviceMediaQuery.MobileS} {
    overflow: hidden;
  }
`;
