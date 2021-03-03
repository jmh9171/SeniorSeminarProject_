import '../styles/index.css'
import Footer from '../components/footer'
import HeaderNav from '../components/header-nav/index.jsx'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <HeaderNav/>
      <Component {...pageProps} />
      <h1>This is on the _app Page</h1>
      <Footer />
    </>
  )
}

export default MyApp
