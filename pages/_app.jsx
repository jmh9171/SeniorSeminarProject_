import '../styles/index.css'
import Footer from '../components/footer'
import HeaderNav from '../components/header-nav/index.jsx'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeaderNav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
//SELECT user.username, playgroup.name FROM user INNER JOIN member ON user.user_id=member.user_id INNER JOIN playgroup ON member.playgroup_id=playgroup.playgroup_id