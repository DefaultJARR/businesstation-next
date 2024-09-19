export interface Message {
  id?: string;
  isAuthors: boolean;
  sentAt: Date;
  content: string;
  audioUrl?: string;
}
