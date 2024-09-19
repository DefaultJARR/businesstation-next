"use client";

import Link from "next/link";
import { useSidebarStore } from "./stores/sidebar.store";
import * as styles from "./dashboard.styles";
import { StyledButtonBase } from "@/components/button-base.styles";
import Sidebar from "./components/sidebar/sidebar";
import ThemeSelector from "@/components/theme-selector.component";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarState = useSidebarStore((state) => state);

  return (
    <styles.DashboardWarpper $sidebar={sidebarState}>
      <Sidebar />

      <styles.DashboardContent>
        <styles.DashboardHeader>
          {/* Mobile */}
          <styles.DashboardHeaderOpenSidebarBtn
            type="button"
            onClick={() => sidebarState.toggleStatus()}
            $sidebar={sidebarState}
          >
            <span className="material-symbols-outlined">menu</span>
          </styles.DashboardHeaderOpenSidebarBtn>
          <ThemeSelector />
          <Link href="/" className="login-btn">
            <StyledButtonBase>Login</StyledButtonBase>
          </Link>
        </styles.DashboardHeader>
        <styles.DashboardBody>{children}</styles.DashboardBody>
      </styles.DashboardContent>
    </styles.DashboardWarpper>
  );
}
