import { createGlobalStyle, withTheme } from 'styled-components'

import { ThemeProps } from './theme'

type GlobalThemeProps = {
  theme: ThemeProps
}
const globalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    /* 62.5% of 16px browser font size is 10px */
    font-size: 62.5%;
  }

  body {
    /* 16px */
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }: GlobalThemeProps) => theme.palette.white};
    box-sizing: border-box;
    min-height: 100%;
    color: ${({ theme }: GlobalThemeProps) => theme.palette.black};
  }

  h1 {
    font-size: 3rem;
    color: ${({ theme }: GlobalThemeProps) => theme.palette.black};
    margin: 0 0 2rem;
    font-weight: bold;

    @media (max-width: ${({ theme }) => theme.breakpoints.screenMD}) {
      margin-bottom: 0;
    }
  }

  h2 {
    font-size: 1.9rem;
    color: ${({ theme }: GlobalThemeProps) => theme.palette.black};
    font-weight: bold;
    margin: 0;
  }

  #root {
    height: 100%;
  }

  .ReactModal__Content {
    // TODO:
    // change to avoid important
    inset: 2rem !important;
  }
`

export default withTheme(globalStyle)
