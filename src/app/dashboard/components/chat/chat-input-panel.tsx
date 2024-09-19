import { EnumDeviceMediaQuery } from "@/responsive/device-size";
import { EnumBaseColors } from "@/theme/entities/enum-base-colors";
import React, { useState } from "react";
import styled from "styled-components";
import { VoiceInputBubble } from "../voice-input-bubble";
import { BubbleButton } from "@/components/bubble-button";

//#region styles
const StyledChatInputControls = styled.div`
  @media ${EnumDeviceMediaQuery.MobileS} {
    padding: 5px 20px !important;
    background-color: ${({ theme }) => theme.Primary.Color};
    display: flex;
    justify-content: center;

    .chat-inputs-container {
      padding: 5px;
      width: 100%;
      border-radius: 30px;
      background-color: ${({ theme }) => theme.Secondary.Color};

      display: grid;
      grid-template-columns: 1fr auto auto;
      grid-gap: 5px;

      .chat-text-input {
        height: 100%;
        resize: none;
        background-color: transparent;
        color: ${EnumBaseColors.White};
        font-size: 16px;
        padding-left: 10px;
        outline: none;
      }
    }
  }

  @media ${EnumDeviceMediaQuery.Tablet} {
    .chat-inputs-container {
      width: 50vw;
    }
  }
`;
//#endregion

interface PropTypes {
  onSendMessage: (textMessage: string) => void;
  isSpeaking: boolean;
  stopSpeaking: () => void;
}

export const ChatInputPanel: React.FC<PropTypes> = (props) => {
  const [chatInputValue, setChatInputValue] = useState("");

  const sendMessage = (chatTextInput: string) => {
    if (!chatTextInput) return;
    setChatInputValue("");
    props.onSendMessage(chatTextInput);
  };

  const textAreaKeyUp = (evt: any) => {
    if (
      evt.key === "Enter" &&
      !evt.shiftKey &&
      !evt.altKey &&
      !evt.ctrlKey &&
      !evt.metaKey
    ) {
      sendMessage(evt.target.value);
    }
  };

  return (
    <StyledChatInputControls>
      <div className="chat-inputs-container">
        <textarea
          className="chat-text-input"
          placeholder="Ingresa tu consulta..."
          value={chatInputValue}
          onChange={(evt) => setChatInputValue(evt.target.value)}
          onKeyUp={textAreaKeyUp}
        />
        {!props.isSpeaking && <VoiceInputBubble setPrompt={sendMessage} />}

        {props.isSpeaking && (
          <BubbleButton
            $icon="volume_off"
            size="40px"
            onClick={() => {
              props.stopSpeaking();
            }}
          />
        )}

        <BubbleButton
          $icon="send"
          size="40px"
          onClick={() => {
            sendMessage(chatInputValue);
          }}
        />
      </div>
    </StyledChatInputControls>
  );
};
