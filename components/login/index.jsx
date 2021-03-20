//react methods to hold states 
import { useState, useEffect } from 'react'
// used fro accessing the next.js router
import Router from 'next/router'
// css styles
import Styles from './index.module.css'
// 
import useUser from '../../lib/useUser'

import fetchJson from '../../lib/fetchJson'




//component that is returned
export default function EntryForm() {

  // from here is the new code
  // import mutateUser from useUser, have to do it in {} because 
  // it is not the default export. Set settings for object
  const { mutateUser } = useUser({
    // this is where the user goes after they create the cookie
    redirectTo: '/profile',
    redirectIfFound: true,
  })
  //create an 'errorMsg' stateful value and a function to change it
  const [errorMsg, setErrorMsg] = useState('')
  // to here

  //stateful variables and their set methods
  const [username, setUname] = useState('')
  const [password, setPword] = useState('')

  // callback method for when submit button is pressed
  async function submitHandler(e) {
    e.preventDefault()

    // create a json object that holds the username you input
    // get the username from the event of the submit button
    // const body = {
    //   username: username,
    // }


    try {
      //fetches to the api for new user
      const res = await fetchJson('/api/login-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        //add the username and password to the body of the request in the form of json
        body: JSON.stringify({
          username,
          password,
        }),
      })


      // call the mutateUser callback function 
      // this should be what creates the session
      // await mutateUser(
      //   // fetch the data from the login api with the username in the body of the message
      //   fetchJson('/api/login', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify(body),
      //   })
      // )

      // call the method for the api
      const json = await res.json()

      //if the response is okay push a path to the router
      if (!res.ok) {
        console.log(json.message)
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <>
      <h1>This is the Login Page</h1>
      <form className={Styles.form} onSubmit={submitHandler}>
        <div className={Styles.imgcontainer}>
          <img src="../../images/blankP.png" alt="Avatar" className={Styles.avatar} />
        </div>
        <div className={Styles.container}>
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
          <button className={Styles.button} type="submit">Login</button>
          <label>
            <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
            </label>
        </div>
        <div className={Styles.container} style={{ backgroundColor: '#f1f1f1' }}>
          <button type="button" className={Styles.cancelbtn}>Cancel</button>
          <span className={Styles.psw}>Forgot <a href="#">password?</a></span>
        </div>
      </form>
    </>
  )
}