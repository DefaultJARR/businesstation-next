import React from "react";
import { useSidebarStore } from "../../stores/sidebar.store";
import * as styles from "./sidebar.styles";
import SidebarChatsList from "./sidbear-chats-list";
import SidebarItem from "./sidebar-item";
import SidebarGroup from "./sidebar-group";
import SidebarSeparator from "./sidebar-separator";

export default function Sidebar() {
  const sidebarState = useSidebarStore((state) => state);

  return (
    <styles.SidebarContainer $sidebar={sidebarState}>
      <styles.SidebarBackground
        $sidebar={sidebarState}
        onClick={() => {
          sidebarState.collapse();
        }}
      />
      <styles.StyledSidebar
        $sidebar={sidebarState}
        onMouseEnter={() => sidebarState.toggleHover()}
        onMouseLeave={() => sidebarState.toggleHover()}
      >
        <styles.SidebarHeader>
          <styles.SidebarHeaderToggle
            type="button"
            onClick={() => sidebarState.toggleStatus()}
            $sidebar={sidebarState}
          >
            <span className="$sidebar-toggle material-symbols-outlined">
              keep
            </span>
          </styles.SidebarHeaderToggle>
        </styles.SidebarHeader>
        <styles.SidebarBody $sidebar={sidebarState}>
          <SidebarItem text="Inicio" href="/dashboard" $icon="dashboard" />
          <SidebarGroup title="Chats" $icon="forum" startOpen={true}>
            <SidebarChatsList />
          </SidebarGroup>
          <SidebarItem
            text="Campañas de Venta"
            href="/sales-campains"
            $icon="payments"
          />
          <SidebarItem text="Soporte" href="/support" $icon="support_agent" />
          <SidebarItem text="Consumo" href="/consume" $icon="paid" />
          <SidebarItem text="Usuarios" href="/users" $icon="group" />
        </styles.SidebarBody>
      </styles.StyledSidebar>
    </styles.SidebarContainer>
  );
}
