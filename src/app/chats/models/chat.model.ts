import { Person } from '../../dashboard/stores/models/person.model';
import { Message } from './message.model';

export interface Chat {
  id: string;
  author: Person;
  createdAt: Date;
  title: string;
  messages: Message[];
}
