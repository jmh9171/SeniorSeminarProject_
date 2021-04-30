import Head from 'next/head'
import Mainprofile from '../components/mainProfile'
import Introduction from '../components/Introduction'
import Profileplaygroups from '../components/ProfilePlaygroups'
import { useRouter } from 'next/router'
import Event from '../components/event'
import React from 'react';
import fetcher from '../lib/fetchJson'
import { useEffect } from 'react'



export default function about(props) {
  const router = useRouter()



  if (props.reroute === true) {
    return (
      <div>
        <Head>
          <title>Profile</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>)
      </div>)
  } else {
    return (
      <div>
        <Head>
          <title>Profile</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <meta charSet="UTF-8" />

        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </div>


        {/* Page Container */}
        <div className="w3-content w3-margin-top" style={{ maxWidth: '1400px' }}>
          {/* The Grid */}
          <div className="w3-row-padding">
            {/* THis is the main profile component.*/}
            <Mainprofile nameOfUser={props.nameOfUser} userGames={props.userGames}></Mainprofile>

            {/* Right Column */}
            <div className="w3-twothird">

              <Introduction description={props.description} ></Introduction>
              <Profileplaygroups></Profileplaygroups>

              {/* End Right Column */}
            </div>


            {/* End Grid */}
          </div>
          {/* End Page Container */}
        </div>
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
export async function getServerSideProps({ req }) {

  const cook = req.cookies.session
  const userData = await fetcher('http://localhost:3000/api/get-userdata', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      cook,
    }),
  })

  if (userData.message === 'no session available') {
    return {
      props: { reroute: true }
    }
  }


  return {
    props: {
      userID: userData.userID,
      nameOfUser: userData.userInfo[0].username,
      description: userData.userInfo[0].description,
      userGames: userData.userGames
    }, // will be passed to the page component as props
  }
}

