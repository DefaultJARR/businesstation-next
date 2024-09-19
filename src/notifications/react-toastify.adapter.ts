import { Flip, ToastOptions, toast } from "react-toastify";
import { INotificationOptions } from "./notification-options.model";

export class ReactToastifyNotificationAdapter {
  notify(newNotifications: INotificationOptions[]) {
    newNotifications.forEach((newNotification) => {
      const { type, message, theme, durationMilliseconds } = newNotification;
      const options: ToastOptions = {
        theme: theme ?? "colored",
        autoClose: durationMilliseconds,
        position: "top-right",
        pauseOnHover: false,
        type: type,
        transition: Flip
      };

      toast(message, options);
    });
  }
}