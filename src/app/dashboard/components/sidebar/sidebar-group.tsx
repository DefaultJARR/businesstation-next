import React, { ComponentProps, useState } from "react";
import * as styles from "./sidebar-group.styles";

type Props = ComponentProps<"div"> & {
  title: string;
  $icon: string;
  startOpen?: boolean;
};

export default function SidebarGroup(props: Props) {
  const [isOpen, setOpen] = useState(props.startOpen || false);

  return (
    <styles.StyledSidebarGroup>
      <styles.SidebarGroupTitle
        $status={isOpen || false}
        onClick={() => setOpen(!isOpen)}
      >
        <span className="group-label">
          <span className="material-symbols-outlined">{props.$icon}</span>
          <p className="title">{props.title}</p>
        </span>
        <span className="group-toggle-arrow material-symbols-outlined">
          keyboard_arrow_down
        </span>
      </styles.SidebarGroupTitle>
      <styles.SidebarGroupContent $status={isOpen}>
        {props.children}
      </styles.SidebarGroupContent>
    </styles.StyledSidebarGroup>
  );
}
