import Head from 'next/head'
import CreateUser from '../components/create-user'



export default function loginPage() {

  return (
    <div>
      <Head>
        <title>Create Account</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CreateUser />
    </div>
  );
}