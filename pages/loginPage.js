import Head from 'next/head'
import Header from '../components/header'

var i = 1;

export default function hello() {

    if( i % 2 === 0){
        i++;
        return(
            <div>
            <Head>
                <title>This is the login page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <h1>
                This is the Login EVEN Page
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
    }else{
        i++;
        return(
            <div>
            <Head>
                <title>This is the login page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <h1>
                This is the Login ODD Page
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

}