import { DefaultTheme } from 'styled-components'

export interface ThemeProps {
  borderRadius: string
  breakpoints: {
    screenSM: string
    screenMD: string
    screenLG: string
    screenXL: string
  }
  palette: {
    black: string
    white: string
    gray: string
    gray50: string
    gray40: string
    gray35: string
    purple: string
    red: string
  }
}

export const defaultTheme: DefaultTheme = {
  borderRadius: '1rem',
  breakpoints: {
    screenSM: '577px',
    screenMD: '767px',
    screenLG: '991px',
    screenXL: '1200px',
  },
  palette: {
    black: '#000000',
    white: '#ffffff',
    gray: '#64748b',
    gray50: '#f7fafc',
    gray40: '#e2e8f0',
    gray35: '#cbd5e1',
    purple: '#4f45e4',
    red: '#E10018',
  },
}
