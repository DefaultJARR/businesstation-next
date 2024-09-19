import { Message } from "@/app/chats/models/message.model";
import { EnumDeviceMediaQuery } from "@/responsive/device-size";

import styled from "styled-components";

export const StyledChatContent = styled.div`
  @media ${EnumDeviceMediaQuery.MobileS} {
    position: relative;
    display: grid;
    grid-template-rows: 1fr auto;
    overflow: auto;
    height: 100%;
  }
`;

export const EmptyChatMessageList = styled.div`
  @media ${EnumDeviceMediaQuery.MobileS} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    gap: 20px;

    * {
      text-align: center;
    }

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      opacity: 0.8;
    }
  }
`;

export const EvaThinking = styled.div`
  @media ${EnumDeviceMediaQuery.MobileS} {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.Secondary.Color};
    opacity: 0.9;
    z-index: 1;

    * {
      text-align: center;
    }

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      opacity: 0.8;
    }
  }
`;

export const ChatMessageList = styled.div`
  @media ${EnumDeviceMediaQuery.MobileS} {
    overflow: auto;
    padding: 0 20px !important;
  }

  @media ${EnumDeviceMediaQuery.Tablet} {
    padding: 0 20% !important;
  }
`;

export const ChatMessage = styled.div<{ $message: Partial<Message> }>`
  @media ${EnumDeviceMediaQuery.MobileS} {
    margin-bottom: 30px;

    .message-header {
      display: flex;
      justify-content: space-between;
      .eva-logo-container {
        position: relative;
        width: 30px;
        height: 30px;
        background-color: #c9c9c9;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 0;
        margin-bottom: 5px;

        img {
          width: 130%;
          height: 130%;
          margin: auto;
          position: absolute;
          z-index: 0;
        }
      }
    }

    p {
      border-radius: 10px;
      width: fit-content;
      overflow: auto;

      ${(props) =>
        props.$message.isAuthors &&
        `
          background-color: ${props.theme.Secondary.Color};
          color: ${props.theme.SecondaryContrast.Color};
          padding: 15px;
          margin-left: auto;
          max-width: 90%;
        `}
    }
  }
`;
