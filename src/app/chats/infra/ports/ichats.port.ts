
import { UserModel } from '@/app/auth/core/models/user.model';
import { Chat } from '../../models/chat.model';
import { Message } from '../../models/message.model';

export interface IChatsPort {
  getChats: (user: UserModel) => Promise<Chat[]>;
  sendMessageToChat: (chat: Chat, message: Message) => Promise<any>;
  deleteChats: (chats: Chat[]) => Promise<boolean>;
}
