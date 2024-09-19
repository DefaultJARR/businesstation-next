import { create } from "zustand";

import { v4 as uuidv4 } from "uuid";
import { Chat } from "./models/chat.model";
import { Message } from "./models/message.model";
import { TestPerson } from "@/harcoded-data/chats-data";

export type ChatsStore = {
  chatSelected: Chat | undefined;
  chats: Chat[];
  addChat: (chatToAdd?: Chat) => void;
  selectChat: (chat: Chat) => void;
  addMessagesToChat: (chat: Chat, newMessages: Message[]) => void;
  deleteChats: (chatIds: string[]) => void;
};

export const useChatsStore = create<ChatsStore>((set) => ({
  chatSelected: undefined,
  chats: [
    {
      id: uuidv4(),
      author: TestPerson,
      createdAt: new Date(),
      messages: [],
      title: "...Nuevo chat vacío...",
    },
  ],
  addChat: (chatToAdd?: Chat) =>
    set((state: any) => {
      const emptyChat: Chat = {
        id: uuidv4(),
        author: TestPerson,
        createdAt: new Date(),
        messages: [],
        title: "...Nuevo chat vacío...",
      };
      const newChat = chatToAdd || emptyChat;
      return {
        chats: [newChat, ...state.chats],
      };
    }),
  selectChat: (chat: Chat) => set({ chatSelected: chat }),
  addMessagesToChat: (chatToMessasge: Chat, newMessages: Message[]) => {
    set((state) => {
      const newChatSelected = state.chatSelected;
      newChatSelected?.messages.push(...newMessages);
      return { chatSelected: newChatSelected };
    });
  },
  deleteChats: (chatIds: string[]) =>
    set((state) => {
      const filteredChats = state.chats.filter(
        (chati) => !chatIds.includes(chati.id)
      );
      return { chats: filteredChats };
    }),
}));
