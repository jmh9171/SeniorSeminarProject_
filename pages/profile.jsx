import Head from 'next/head'
import Mainprofile from '../components/mainProfile'
import Introduction from '../components/Introduction'
import Profileplaygroups from '../components/ProfilePlaygroups'

import Event from '../components/event'
import React from 'react';
import fetcher from '../lib/fetchJson'
import useUser from '../lib/useUser'




export default function about(props) {
  // use this to check if the user is logged in 
  const { user, mutateUser } = useUser({
    // this is where the user goes after they create the cookie
    redirectTo: '/profile',
    redirectIfFound: true,
  })

  const data = fetcher('http://localhost:3000/api/get-username', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })

  return (
    <div>
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <meta charSet="UTF-8" />
      <style dangerouslySetInnerHTML={{ __html: "\nhtml,body,h1,h2,h3,h4,h5,h6 {font-family: \"Roboto\", sans-serif}\n" }} />

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

          <Mainprofile nameOfUser={props.nameOfUser}></Mainprofile>

          {/* Right Column */}
          <div className="w3-twothird">

            <Introduction></Introduction>
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



export async function getServerSideProps({ req }) {


  const hhh = "'hello'"
  const idk = fetcher('http://localhost:3000/api/get-username', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      hhh
    }),
  })
  //console.log(idk);
  //TODO
  return {
    props: { nameOfUser: "jake" }, // will be passed to the page component as props
  }
}

//Fe26.2*1*bea44419f0d3ac5d08652476fcfa47b02a4150288ac3cc7dace53bba681cf727*Tqll6LwMe5mVniqZTms_tQ*M7rgDv8vHfbWq8ZIbC5Kbru6RM546cicGXnahORwVSaFldnG1SftnwztHAKYmJmOvmA25tGOJoqQwAwiqtOG4_BsyjdmO6ZxTVL8RhRC580q39QowDZO8magLJtJxt3UuR8AQf4POI8p1vSm52SrneoKMN8kh2vrPxY-OPnJeHD2vxxgwTRDsRN3sjV1IJk5*1618454212981*8a27f7b9884bbefa7f8875465fba6ab9d3dea3ebd970038362094d6f65e5588a*fwE2CX6SUK80W-oWXJ2m6dmrDK0uZ8HvO45HC0jougI
//Fe26.2*1*a35114b586bcd0d897eb7e4ac21e11853bea6fe2aaff02d7724d117e2d9c25b8*Z9Ijpb6bHMYvJC7qhqdGEw*GPSVqjpOD0Z3yHGas3jXuv8T6WhKlLDVwrZiTrFGQqRg0Lh6qVv0V7W-D-8rp5VGolojznD1-JJZ4dgsjxCEECOgJ-k9k2fZ6PKwOpjmsIsgUDGVh4o9pRDuHWUyjoWx6x8Ji8qOJXtrV5t25aL0l3AtIiiZUnIfWDY4uzDXLzP8UuLEgJeECui07Y3U9rbA*1618460203656*42abcc2512918fba362172dd472a18ebc9009c99183c8f9efaf100f3f03e67af*fnIYme-K1w8O25sLCMOSVGiGhjlrERxUVtwiZyeTHDo