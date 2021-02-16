import Head from 'next/head'
import Header from '../components/header'

export default function hello() {
return(
    <div>
   
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta charset="utf-8"/>
        <meta name="keywords" content=""/>
        <meta name="description" content=""/>
        <meta name="page_type" content="np-template-header-footer-from-plugin"/>
        <title>CreateAccount</title>
        </Head>
    <Header/>
    <h1>
        This is the Content Page
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
