import Head from 'next/head'
import Header from '../components/header'


export default function about() {
return(
    <div>
    <Head>
        <title>This is the login page</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
    <h1>
        This is the About Page
    </h1>
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
    </div>
);
}