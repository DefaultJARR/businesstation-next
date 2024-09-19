import { create } from 'zustand';
import { EnumBaseColors } from './entities/enum-base-colors';
import { Theme } from './entities/theme';

const {
  Black,
  White,
  DarkGray,
  MediumGray,
  EvaLightBlue,
  EvaBlue,
  EvaDarkBlue,
} = EnumBaseColors;

export const ThemePresets: Theme[] = [
  new Theme('GreenBlue', EvaBlue, Black, EvaDarkBlue, White, EvaLightBlue, Black, White),
  new Theme('Dark', MediumGray, Black, DarkGray, White, DarkGray, Black, White),
  new Theme('Light', White, Black, EvaBlue, White, DarkGray, Black, EvaDarkBlue),
];
export const DEFAULT_THEME = ThemePresets[0];

type ThemeStore = {
  allThemes: Theme[];
  selectedTheme: Theme;
  setTheme: (newTheme: Theme) => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  allThemes: ThemePresets,
  selectedTheme: DEFAULT_THEME,
  setTheme: (newTheme) => set({ selectedTheme: newTheme }),
}));
