export abstract class INotificationOptions {
  message?: string = "Default notification message!";
  theme?: "dark" | "light" | "colored" = "colored";
  durationMilliseconds?: number = 2000;
  type: "success" | "warning" | "error" = "success";
}