//react methods to hold states 
import { useState } from 'react'
// used fro accessing the next.js router
// css styles
import Styles from './index.module.css'
// 
import useUser from '../../lib/useUser'

import fetchJson from '../../lib/fetchJson'

export default function createUserForm() {
    // import mutateUser from useUser, have to do it in {} because 
    // it is not the default export. Set settings for object
    const { mutateUser } = useUser({
        // this is where the user goes after they create the cookie
        redirectTo: '/profile',
        redirectIfFound: true,
    })
    //create an 'errorMsg' stateful value and a function to change it
    const [errorMsg, setErrorMsg] = useState('')

    //stateful variables and their set methods
    const [username, setUname] = useState('')
    const [password, setPword] = useState('')
    const [email, setEmail] = useState('')

    // callback method for when submit button is pressed
    async function submitHandler(e) {
        e.preventDefault()
        try {
            console.log("Here")
            //fetches to the api for new user
            const res = await mutateUser(
                fetchJson('/api/new-user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    //add the username and password to the body of the request in the form of json
                    body: JSON.stringify({
                        email,
                        username,
                        password,
                    }),
                }))

            const setCook = await mutateUser(
                fetchJson('/api/set-cookie', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                })
            )

            // if the status code from the response is not 'OK' throw an unauthorized error
            if (response.status != 200) {
                throw { message: "Unauthorized" }
            }
            // catch the error thrown, if there is one
        } catch (e) {
            // set the error message state to the message
            setErrorMsg(e.message)
        }
    }
    if (errorMsg === "Unauthorized") {
        return (
            <>
                <h1></h1>
                <form className={Styles.form} onSubmit={submitHandler}>
                    <div className={Styles.imgcontainer}>
                        <p>{errorMsg}</p>
                        <img src="../../images/blankP.png" alt="Avatar" className={Styles.avatar} />
                    </div>
                    <div className={Styles.container}>
                        <label htmlFor="email"><b>Email</b></label>
                        <input
                            className={Styles.input}
                            type="text"
                            placeholder="Enter Email Address"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="uname"><b>Username</b></label>
                        <input
                            className={Styles.input}
                            type="text"
                            placeholder="Enter Username"
                            name="uname" required
                            value={username}
                            onChange={(e) => setUname(e.target.value)}
                        />
                        <label htmlFor="psw"><b>Password</b></label>
                        <input
                            className={Styles.input}
                            type="password"
                            placeholder="Enter Password"
                            name="psw"
                            value={password}
                            onChange={(e) => setPword(e.target.value)}
                        />

                        <center><button className={Styles.button} type="submit">Login</button></center>

                    </div>
                    <div className={Styles.container} style={{ backgroundColor: '#f1f1f1' }}></div>
                </form>
            </>
        )
    } else {
        return (
            <>
                <h1></h1>
                <form className={Styles.form} onSubmit={submitHandler}>
                    <div className={Styles.imgcontainer}>
                        <img src="../../images/blankP.png" alt="Avatar" className={Styles.avatar} />
                    </div>
                    <div className={Styles.container}>
                        <label htmlFor="email"><b>Email</b></label>
                        <input
                            className={Styles.input}
                            type="text"
                            placeholder="Enter Email Address"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="uname"><b>Username</b></label>
                        <input
                            className={Styles.input}
                            type="text"
                            placeholder="Enter Username"
                            name="uname" required
                            value={username}
                            onChange={(e) => setUname(e.target.value)}
                        />
                        <label htmlFor="psw"><b>Password</b></label>
                        <input
                            className={Styles.input}
                            type="password"
                            placeholder="Enter Password"
                            name="psw"
                            value={password}
                            onChange={(e) => setPword(e.target.value)}
                        />
                        <center><button className={Styles.button} type="submit">Login</button></center>

                    </div>
                    <div className={Styles.container} style={{ backgroundColor: '#f1f1f1' }}></div>
                </form>
            </>
        )
    }
}