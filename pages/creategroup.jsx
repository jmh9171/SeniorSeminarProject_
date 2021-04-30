import Head from 'next/head'
import Group from '../components/group'
import Creategroupform from '../components/creategroup'


export default function about() {
    return (
        <div>
            <Head>
                <title>My groups</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata" />
            </div>

            <center><img src="images/GroupsBG.jpg" style={{ opacity: '0.9', width: '100%', maxHeight: '1200px' }} className="w3-margin-top" /></center>
            <div className="w3-display-middle w3-center" style={{ width: '50%', height: '85%' }}>
                <span className="w3-text-white" style={{ fontSize: '90px' }}>Create Group<br /></span>

                <Creategroupform />

            </div>

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
            description: userData.userInfo[0].description,
            userGames: userData.userGames
        }, // will be passed to the page component as props
    }
}

ß