import '../styles/index.css'
import Footer from '../components/footer'
import HeaderNav from '../components/header-nav/index.jsx'
import {CookieProvider} from "react-cookie"

function MyApp({ Component, pageProps }) {
  return (
    <CookieProvider>
    <HeaderNav/>
      <Component {...pageProps} />
      <h1>This is on the _app Page</h1>
      <Footer />
    </CookieProvider>
  )
}

export default MyApp
