import { Theme } from './entities/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
