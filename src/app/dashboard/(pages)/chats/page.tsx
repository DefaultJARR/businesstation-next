'use client';

import { useChatsStore } from '@/app/chats/chats.store';
import { redirect } from 'next/navigation';

export default function Chats() {
  const chatsState = useChatsStore((state) => state);
  redirect('/dashboard/chats/' + chatsState.chats[0]?.id || '');
}
