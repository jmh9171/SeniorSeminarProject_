import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
      
        <title>Login or Create Account</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/> 
      <main>
        <h1 className="title">
          Home Page

        </h1>

       
      </main>

      
      <style jsx>{`
        
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
        <Footer/> 
    </div>
  )
}
