import { ThemeProvider, DefaultTheme } from 'styled-components';

interface ThemeProps {
  children: React.ReactNode
}

const customTheme: DefaultTheme = {
  colors: {
    primaryMain: "#E3313C",
    primaryMedium: "#E95A63",
    primaryLight: "#EE838A",
    white: "#fff",
    gray30: "#DDDFE4",
    gray50: "#8E93A5",
    gray60: "#797D8C",
    gray70: "#32333A",
    gray80: "#151619",
  },
  fonts: ["Roboto", "sans-serif"],
  fontSizes: {
    xsmall: "0.75rem",
    regular: "1rem",
    medium: "1.15rem",
    large: "1.35rem",
    xlarge: "1.75rem"
  }
}

export const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
);