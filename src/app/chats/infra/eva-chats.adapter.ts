import { IChatsPort } from "./ports/ichats.port";
import { Message } from "../models/message.model";
import { Chat } from "../models/chat.model";
import { UserModel } from "@/app/auth/core/models/user.model";

export class EVAChatsAdapter implements IChatsPort {
  keywords: string[] = ["factura", "inventario", "cliente"];

  getChats(user: UserModel) {
    return new Promise<Chat[]>((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          console.log(user);
          resolve([]);
        } else {
          reject("Operation failed");
        }
      }, 2000);
    });
  }

  async sendMessageToChat(chat: Chat, message: Message) {
    const messageContent = message.content.toLocaleLowerCase();

    if (messageContent.includes("hola")) {
      const holaMessage: Message = {
        isAuthors: false,
        sentAt: new Date(),
        content: `¡Hola, soy Eva, tu asistente virtual! ¿En qué te puedo ayudar?`,
      };
      return holaMessage;
    }

    if (messageContent.includes("gracias")) {
      const thanksMessage: Message = {
        isAuthors: false,
        sentAt: new Date(),
        content: `¡Un gusto ayudarte! Estaré disponible por si necesitas algo más.`,
      };
      return thanksMessage;
    }

    if (messageContent.includes("eva")) {
      const keywordSelected = this.keywords.find((keyword) =>
        messageContent.includes(keyword)
      );

      if (!keywordSelected) {
        const nodataMessage: Message = {
          isAuthors: false,
          sentAt: new Date(),
          content: `No tengo datos relacionados a la consulta que me haces, intentalo de nuevo por favor.`,
        };
        return nodataMessage;
      }

      // const url = 'http://localhost:3002';
      const url = process.env.NEXT_PUBLIC_BACKEND_API;

      const response = await fetch(
        url + "/api/eva/default?keyword=" + keywordSelected,
        {
          method: "GET", // Specify the request method
          headers: {
            "Content-Type": "application/json", // Specify that you're sending JSON
          },
        }
      );
      const data = await response.json();

      const responseMessage: Message = {
        isAuthors: false,
        sentAt: new Date(),
        content: data.result,
      };

      return responseMessage;
    }

    // const url = 'http://localhost:3001';
    const url = process.env.NEXT_PUBLIC_BACKEND_API;
    const requestBody = {
      message: message.content,
      thread: chat.id,
      user: chat.author.id,
    };
    const response = await fetch(url + "/api/eva/conversation", {
      method: "POST", // Specify the request method
      headers: {
        "Content-Type": "application/json", // Specify that you're sending JSON
      },
      body: JSON.stringify(requestBody), // Convert the data object to a JSON string
    });
    const data = await response.json();

    const responseMessage: Message = {
      isAuthors: false,
      sentAt: new Date(data.createdAt),
      content: data.content,
    };

    return responseMessage;
  }

  deleteChats(chats: Chat[]) {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          console.log(chats);
          resolve(true);
        } else {
          reject("Operation failed");
        }
      }, 1000);
    });
  }
}
