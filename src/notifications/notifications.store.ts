import { create } from "zustand";
import { INotificationOptions } from "./notification-options.model";

type NotificationsStore = {
  notifications: INotificationOptions[],
  addNotifications: (newNotifications: INotificationOptions[]) => void,
  clearNotifications: () => void
}

export const useNotificationsStore = create<NotificationsStore>((set) => ({
  notifications: [],
  addNotifications: (newNotifications) => set((state) => ({ notifications: [...state.notifications, ...newNotifications] })),
  clearNotifications: () => set({ notifications: [] })
}))