import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import {GlobalStyles} from 'twin.macro'
import {NavMenu, Header} from '../components'
import {ThemeProvider} from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles/>
      <ThemeProvider attribute='class'>
        <NavMenu/>
        <Header/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
