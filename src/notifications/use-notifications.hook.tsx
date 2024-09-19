import { INotificationOptions } from './notification-options.model';
import { useNotificationsStore } from './notifications.store';
import { ReactToastifyNotificationAdapter } from './react-toastify.adapter';

export const useNotifications = () => {
  const notifications = useNotificationsStore((state) => state.notifications);
  const addNotifications = useNotificationsStore(
    (state) => state.addNotifications
  );

  const notify = (newNotifications: INotificationOptions[]) => {
    const currentNotifications = notifications;
    addNotifications([...newNotifications, ...currentNotifications]);

    // passing notification to external notification lib
    new ReactToastifyNotificationAdapter().notify(newNotifications);
  };

  return [notify];
};
