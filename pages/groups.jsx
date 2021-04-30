import Head from 'next/head'
import Group from '../components/group'
import fetcher from '../lib/fetchJson'


export default function groups(props) {
  return (
    <div>
      <Head>
        <title>My groups</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata" />
      </div>

      <center><img src="images/GroupsBG.jpg" style={{ opacity: '0.9', width: '100%', maxHeight: '1200px' }} className="w3-margin-top" /></center>
      <div className="w3-display-middle w3-center" style={{ width: '50%', height: '85%' }}>
        <span className="w3-text-white" style={{ fontSize: '90px' }}>My Groups<br /></span>
        <center>

          <div className="w3-middle-align" style={{ maxWidth: '800px', maxHeight: '250px', overflow: 'hidden', overflow: 'auto', background: "rgba(46, 49, 49, 0.75)" }}>

            {props.userGroups.userGroups.map(({ playgroup_name }) => (
              <Group group={playgroup_name} />
            ))
            }
          </div>
        </center>

        <p style={{ fontSize: "50px", color: "white" }}><a href="/creategroup">Create Group</a></p>



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
      userGames: userData.userGames,
      userGroups: userData.userGroups
    }, // will be passed to the page component as props
  }
}