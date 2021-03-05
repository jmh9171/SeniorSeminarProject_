import Head from 'next/head'


export default function hello() {
return(
    <div>
        <Head>
            <title>CreateAccount</title>
        </Head>
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
