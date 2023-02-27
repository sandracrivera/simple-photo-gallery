import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { BreakpointProvider } from 'react-socks'

import store from 'redux/store'
import Home from 'pages/home'
import { defaultTheme } from 'styles/theme'
import GlobalStyle from 'styles/global'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BreakpointProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </Router>
        </BreakpointProvider>
      </ThemeProvider>
    </Provider>
  )
}

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(<App />)
