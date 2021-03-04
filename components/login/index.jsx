//react methods to hold states 
import { useState, useEffect } from 'react'
// used fro accessing the next.js router
import Router from 'next/router'
// css styles
import Styles from './index.module.css'
// for cookies
import Cookie from "js-cookie"

//component that is returned
export default function EntryForm() {

  //stateful variables and their set methods
  const [username, setUname] = useState('')
  const [password, setPword] = useState('')

  // method called after rendering of the page.
  // setting the cookie
  useEffect(() => {
    Cookie.set("username", username);
  }, [username])

  // callback method for when submit button is pressed
  async function submitHandler(e) {
    e.preventDefault()
    try {
      //fetches to the api for new user
      const res = await fetch('/api/new-user', {
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
      // call the method for the api
      const json = await res.json()

      //if the response is okay push a path to the router
      if (!res.ok) {
        Router.push('/loginPage')
        throw Error(json.message)
      }
      Router.push('/loginPage')
    } catch (e) {
      throw Error(e.message)
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




