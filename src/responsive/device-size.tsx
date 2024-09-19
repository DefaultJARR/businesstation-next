export enum EnumDeviceSize {
  MobileS = "320px",
  MobileM = "375px",
  MobileL = "425px",
  Tablet = "768px",
  Laptop = "1024px",
  LaptopL = "1440px",
  Desktop = "2560px",
}

export const EnumDeviceMediaQuery = {
  MobileS: `(min-width: ${EnumDeviceSize.MobileS})`,
  MobileM: `(min-width: ${EnumDeviceSize.MobileM})`,
  MobileL: `(min-width: ${EnumDeviceSize.MobileL})`,
  Tablet: `(min-width: ${EnumDeviceSize.Tablet})`,
  Laptop: `(min-width: ${EnumDeviceSize.Laptop})`,
  LaptopL: `(min-width: ${EnumDeviceSize.LaptopL})`,
  Desktop: `(min-width: ${EnumDeviceSize.Desktop})`,
};
