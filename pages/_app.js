import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import {GlobalStyles} from 'twin.macro'
import {NavMenu, Header} from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles/>
      <NavMenu/>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
