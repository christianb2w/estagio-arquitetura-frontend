import 'styled-components';
interface IPalette {
  main: string
  contrastText: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryMain: string;
      primaryMedium: string;
      primaryLight: string;
      white: string;
      gray30: string;
      gray50: string;
      gray60: string;
      gray70: string;
      gray80: string;
    },
    fonts: Array<string>,
    fontSizes: {
      xsmall: string;
      regular: string;
      medium: string;
      large: string;
      xlarge: string;
    }
  }
}