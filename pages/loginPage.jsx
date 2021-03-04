import Head from 'next/head'
import Login from '../components/login'
import parseCookie from "../lib/parseCookie"




export default function loginPage({ cookieName }) {
    console.log(cookieName);
        return(
            <div>
            <Head>
                <title>Login page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Login/>
            </div>
        );
}

loginPage.getInitialProps = async ({ req }) => {
  const cookie = parseCookie(req)
  return {
    cookieName: cookie
  }
}