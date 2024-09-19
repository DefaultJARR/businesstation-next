import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps } from "react";
import styled from "styled-components";
import { useSidebarStore } from "../../stores/sidebar.store";
import { EnumDeviceMediaQuery } from "@/responsive/device-size";
import { rgba } from "polished";

export const StyledSidebarItem = styled(Link)`
  @media ${EnumDeviceMediaQuery.MobileS} {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1em;
    border-radius: 0 30px 30px 0;
    padding: 5px;
    padding-left: 20px;
    transition-duration: 150ms;
    background-color: ${(props) => props.theme.Secondary.Color};

    p {
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 15px;
    }

    &.active,
    &:hover {
      background-color: ${(props) => rgba(props.theme.Primary.Color, 0.6)};
    }
  }
`;

type Props = ComponentProps<"div"> & {
  $icon?: string;
  text: string;
  href: string;
};

export default function SidebarItem(props: Props) {
  const pathname = usePathname();
  const sidebarState = useSidebarStore((state) => state);

  return (
    <StyledSidebarItem
      href={props.href}
      className={`${
        pathname === props.href &&
        (sidebarState.status === "open" || sidebarState.isHovered)
          ? "active"
          : ""
      }`}
    >
      {props.$icon && (
        <span className="material-symbols-outlined">{props.$icon}</span>
      )}
      <p>{props.text}</p>
    </StyledSidebarItem>
  );
}
