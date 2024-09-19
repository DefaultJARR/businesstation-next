import styled from "styled-components";
import { useChatsStore } from "../../../chats/chats.store";
import SidebarItem from "./sidebar-item";
import { EnumDeviceMediaQuery } from "@/responsive/device-size";
import { rgba } from "polished";

const StyledSidebarChatsList = styled.ul`
  @media ${EnumDeviceMediaQuery.MobileS} {
    display: flex;
    flex-direction: column;
    gap: 3px;

    .create-button {
      width: fit-content;
      align-self: flex-end;
      white-space: nowrap;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin: 5px;
      padding: 5px 10px;
      border-radius: 30px;
      position: sticky;
      top: 5px;
      background-color: ${(props) => props.theme.Secondary.Color};

      * {
        font-size: 0.9em;
      }

      button {
        background-color: transparent;
      }

      &:hover {
        background-color: ${(props) => rgba(props.theme.Tertiary.Color, 0.6)};
      }
    }
  }
`;

export default function SidebarChatsList() {
  const sidebarState = useChatsStore((state) => state);

  return (
    <StyledSidebarChatsList>
      <div className="create-button" onClick={() => sidebarState.addChat()}>
        <span className="material-symbols-outlined">add</span>
        <button>Crear Chat</button>
      </div>
      {sidebarState.chats.map((chat) => (
        <SidebarItem
          key={chat.id}
          text={chat.messages[0]?.content || chat.title}
          href={"/dashboard/chats/" + chat.id}
        />
      ))}
    </StyledSidebarChatsList>
  );
}
