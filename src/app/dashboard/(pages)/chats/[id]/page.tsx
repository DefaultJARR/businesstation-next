"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import EVALogo from "@/assets/logo/eva-logo.png";
import EVALogoGif from "@/assets/logo/eva-logo.gif";
import * as styles from "./styles";
import { useChatsStore } from "@/app/chats/chats.store";
import { EVAChatsAdapter } from "@/app/chats/infra/eva-chats.adapter";
import { BubbleButton } from "@/components/bubble-button";
import { useNotifications } from "@/notifications/use-notifications.hook";
import { ChatInputPanel } from "@/app/dashboard/components/chat/chat-input-panel";

export default function ChatContentById({ params }: any) {
  const [notify] = useNotifications();
  const chatsState = useChatsStore((state) => state);
  const chatListRef = useRef<HTMLDivElement>(null);
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [thinking, setThinking] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const selectedChat = chatsState.chats.filter(
      (chat) => chat.id == params.id
    );
    chatsState.selectChat(selectedChat[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps

    // Selecting voice
    const populateVoices = () => {
      // The voices are available, you can populate your voice list
      const availableVoices = speechSynthesis.getVoices();
      const usSpanishVoices = availableVoices.filter((voice) =>
        voice.lang.includes("es-US")
      );
      if (usSpanishVoices.length > 0) {
        setVoice(usSpanishVoices[1]);
      }
    };
    populateVoices();

    // Add event listener for voiceschanged to ensure voices are loaded
    speechSynthesis.onvoiceschanged = () => {
      populateVoices();
    };

    // Cleanup event listener on component unmount
    return () => {
      speechSynthesis.onvoiceschanged = null;
      speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current!.scrollTop = chatListRef.current!.scrollHeight;
    }
  }, [chatsState.chatSelected?.messages]);

  const sendMessage = async (chatInputValue: string) => {
    if (!chatsState.chatSelected) return;

    setThinking(true);

    const newMessage = {
      sentAt: new Date(),
      isAuthors: true,
      content: chatInputValue,
    };

    try {
      const messageResponse = await new EVAChatsAdapter().sendMessageToChat(
        chatsState.chatSelected,
        newMessage
      );

      if (messageResponse) {
        chatsState.addMessagesToChat(chatsState.chatSelected, [
          newMessage,
          messageResponse,
        ]);

        await speak(messageResponse.content);
      }
      setThinking(false);
    } catch (error) {
      speechSynthesis.cancel();
      setThinking(false);
      notify([
        {
          type: "warning",
          message: "Error al conectar con eva, intentalo de nuevo.",
        },
      ]);
    }
  };

  const speak = (prompt: string) => {
    if (!("speechSynthesis" in window)) {
      alert("Sorry, your browser doesn't support speech synthesis.");
      return;
    }

    // Regular expression to detect numbers in the text
    // let formattedText = prompt.replace(/\d+/g, function (match: any) {
    //   const numberFormatter = new Intl.NumberFormat("es-CO");
    //   return numberFormatter.format(match);
    // });

    const utterance = new SpeechSynthesisUtterance(prompt);

    // Optional properties
    utterance.pitch = 1; // Range: 0 (low) to 2 (high)
    utterance.rate = 1.15; // Range: 0.1 (slow) to 10 (fast)
    utterance.volume = 1; // Range: 0 (silent) to 1 (loud)
    utterance.voice = voice;
    utterance.lang = "es-CO";

    // Control when speech starts and ends
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    // Speak the text
    speechSynthesis.speak(utterance);
  };

  return (
    <styles.StyledChatContent>
      {/* Empty Chat */}
      {chatsState.chatSelected && !chatsState.chatSelected.messages.length && (
        <styles.EmptyChatMessageList>
          <img src={EVALogoGif.src} alt="Login background image" />
          <h4>Soy Eva, soy la voz de tu negocio, siempre a tu lado.</h4>
          <p>¿Cómo podemos mejorar tu negocio el día de hoy?</p>
        </styles.EmptyChatMessageList>
      )}

      {thinking && (
        <styles.EvaThinking>
          <img src={EVALogoGif.src} alt="Login background image" />
          <h4>Pensando...</h4>
        </styles.EvaThinking>
      )}

      <styles.ChatMessageList ref={chatListRef}>
        {chatsState.chatSelected &&
          chatsState.chatSelected.messages?.map((message, idx) => (
            <styles.ChatMessage key={message.content + idx} $message={message}>
              {!message.isAuthors && (
                <div className="message-header">
                  <span className="eva-logo-container">
                    <Image src={EVALogo} alt={"eva-logo"} />
                  </span>
                  <BubbleButton
                    $icon="play_circle"
                    size="25px"
                    style={{ background: "gray", borderColor: "gray" }}
                    onClick={() => speak(message.content || "")}
                  />
                </div>
              )}
              <p>{message.content}</p>
            </styles.ChatMessage>
          ))}
      </styles.ChatMessageList>
      <ChatInputPanel
        onSendMessage={sendMessage}
        isSpeaking={isSpeaking}
        stopSpeaking={() => {
          speechSynthesis.cancel();
          setIsSpeaking(false);
        }}
      />
    </styles.StyledChatContent>
  );
}
