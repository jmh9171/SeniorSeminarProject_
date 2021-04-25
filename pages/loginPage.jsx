import Head from 'next/head'
import Login from '../components/login'




export default function loginPage() {

  return (
    <div>
      <Head>
        <title>Login page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />



    </div>

    
  );
}