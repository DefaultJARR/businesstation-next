import { Chat } from "@/app/chats/models/chat.model";
import { Person } from "@/app/dashboard/stores/models/person.model";


export const TestPerson: Person = {
  id: '5900ace9-95ba-499c-99fd-f17eb4eabbd0',
  name: 'Johan Ramirez',
  phone: '3134156964',
  email: 'johan.ramirez@mkeitez.com',
  password: '1234',
};

export const FakeChats: Chat[] = [
  {
    id: '1',
    author: TestPerson,
    createdAt: new Date(),
    messages: [
      {
        sentAt: new Date(),
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isAuthors: true,
      },
      {
        sentAt: new Date(),
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isAuthors: false,
      },
      {
        sentAt: new Date(),
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isAuthors: true,
      },
      {
        sentAt: new Date(),
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isAuthors: false,
      },
      {
        sentAt: new Date(),
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isAuthors: true,
      },
      {
        sentAt: new Date(),
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isAuthors: false,
      },
      {
        sentAt: new Date(),
        content: 'Proyecciones de compras 2024',
        isAuthors: true,
      },
      {
        sentAt: new Date(),
        content: 'Proyecciones de compras 2024',
        isAuthors: false,
      },
    ],
    title: '',
  },
  {
    id: '2',
    author: TestPerson,
    createdAt: new Date(),
    messages: [
      {
        sentAt: new Date(),
        content: 'Demografía de mis empleados',
        audioUrl: 'https://video.com/asdadsad',
        isAuthors: false,
      },
      {
        sentAt: new Date(),
        content: 'Demografía de mis empleados',
        audioUrl: 'https://video.com/asdadsad',
        isAuthors: false,
      },
      {
        sentAt: new Date(),
        content: 'Demografía de mis empleados',
        audioUrl: 'https://video.com/asdadsad',
        isAuthors: false,
      },
    ],
    title: '',
  },
  {
    id: '3',
    author: TestPerson,
    createdAt: new Date(),
    messages: [
      {
        sentAt: new Date(),
        content: 'Ventas en Madrid en 2022',
        audioUrl: 'https://video.com/asdadsad',
        isAuthors: false,
      },
    ],
    title: '',
  },
  {
    id: '4',
    author: TestPerson,
    createdAt: new Date(),
    messages: [
      {
        sentAt: new Date(),
        content: 'Tiempo usado en reuniones en la organizacion',
        audioUrl: 'https://video.com/asdadsad',
        isAuthors: false,
      },
      {
        sentAt: new Date(),
        content: 'Demografía de mis empleados',
        audioUrl: 'https://video.com/asdadsad',
        isAuthors: false,
      },
    ],
    title: '',
  },
];
