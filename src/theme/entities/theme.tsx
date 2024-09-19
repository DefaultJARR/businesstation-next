import Color from './color';

export class Theme {
  ThemeName: string;
  Primary: Color;
  PrimaryContrast: Color;
  Secondary: Color;
  SecondaryContrast: Color;
  Tertiary: Color;
  TertiaryContrast: Color;
  DefaultTextColor: Color;

  constructor(
    themeName: string,
    primary: string,
    primaryContrast: string,
    secondary: string,
    sedondaryContrast: string,
    tertiary: string,
    tertiaryContrast: string,
    defaultTextColor: string
  ) {
    this.ThemeName = themeName;
    this.Primary = new Color(primary);
    this.PrimaryContrast = new Color(primaryContrast);
    this.Secondary = new Color(secondary);
    this.SecondaryContrast = new Color(sedondaryContrast);
    this.Tertiary = new Color(tertiary);
    this.TertiaryContrast = new Color(tertiaryContrast);
    this.DefaultTextColor = new Color(defaultTextColor);
  }
}
