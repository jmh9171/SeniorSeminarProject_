import { useState } from 'react'
import Router from 'next/router'
import Styles from './index.module.css'

import Button from '../button'

export default function EntryForm() {
  const [username, setUname] = useState('')
  const [password, setPword] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function submitHandler(e) {
    setSubmitting(true)
    e.preventDefault()
    try {
      const res = await fetch('/api/new-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })
      
      setSubmitting(false)
      const json = await res.json()
      if (!res.ok) throw Error(json.message)
      
      Router.push('/loginPage')
    } catch (e) {
      throw Error(e.message)
    }
  }

  return (
      <>

      <h1>Hello</h1>
    <form className={Styles.form} onSubmit={submitHandler}>
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
                name="psw" required 
                value={password}
                onChange={(e) => setPword(e.target.value)}
                />
            <button className={Styles.Button} type="submit">Login</button>
            <label>
              <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
            </label>
          </div>
          <div className="container" style={{backgroundColor: '#f1f1f1'}}>
            <button type="button" className="cancelbtn">Cancel</button>
            <span className={Styles.psw}>Forgot <a href="#">password?</a></span>
          </div>
    </form>
    </>
  )
}


{/* <div className="my-4">
        <label htmlFor="title">
          <h3 className="font-bold">Title</h3>
        </label>
        <input
          id="title"
          className="shadow border rounded w-full"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="content">
          <h3 className="font-bold">Content</h3>
        </label>
        <textarea
          className="shadow border resize-none focus:shadow-outline w-full h-48"
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <Button disabled={submitting} type="submit">
        {submitting ? 'Creating ...' : 'Create'}
      </Button> */}