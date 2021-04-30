import React from 'react';
//react methods to hold states 
import { useState } from 'react';
import useUser from '../../lib/useUser'

import { useRouter } from 'next/router'

import fetchJson from '../../lib/fetchJson'




export default function profileedit({ userID }) {
  const router = useRouter()
  const { mutateUser } = useUser({
    // this is where the user goes after they create the cookie
    redirectTo: '/profile',
    redirectIfFound: false,
  })

  const [prefGame_1, setPrefGame_1] = useState('');
  const [prefGame_2, setPrefGame_2] = useState('');
  const [prefGame_3, setPrefGame_3] = useState('');
  const [description, setDescription] = useState('');


  async function submitHandler2(e) {
    e.preventDefault()
    try {
      const userData = await fetchJson('/api/set-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userID,
          prefGame_1,
          prefGame_2,
          prefGame_3,
          description,
        }),
      })



    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <>
      <center> <h3 style={{ color: "white" }}>Edit Profile Form</h3></center>
      <div className="container">
        <form onSubmit={submitHandler2} action={() => router.push('/profile')}>

          <label htmlFor="pgame1">Preferred Game #1</label>
          <input
            type="text"
            id="p1"
            name="pg1"
            placeholder="Preferred game.."
            value={prefGame_1}
            onChange={(e) => setPrefGame_1(e.target.value)} />
          <label htmlFor="pgame2">Preferred Game #2</label>
          <input
            type="text"
            id="p2" name="pg2"
            placeholder="Preferred game.."
            value={prefGame_2}
            onChange={(e) => setPrefGame_2(e.target.value)} />

          <label htmlFor="pgame3">Preferred Game #3</label>
          <input
            type="text"
            id="p3"
            name="pg3"
            placeholder="Preferred game.."
            value={prefGame_3}
            onChange={(e) => setPrefGame_3(e.target.value)} />

          <label htmlFor="intro">Introduction</label>
          <textarea
            id="introduction"
            name="introduction"
            placeholder="Write something about yourself.."
            style={{ height: '200px' }}
            value={description}
            onChange={(e) => setDescription(e.target.value)} />

          <center><button type="submit">Submit</button></center>

        </form>
      </div>

      <style>{`
       body {font-family: Arial}
       * {box-sizing: border-box;}
       
       input[type=text], select, textarea {
         width: 100%;
         padding: 12px;
         border: 1px solid #ccc;
         border-radius: 4px;
         box-sizing: border-box;
         margin-top: 6px;
         margin-bottom: 16px;
         resize: vertical;
       }
       
       input[type=submit] {
         background-color: #4c9aaf;
         color: white;
         padding: 12px 20px;
         border: none;
         border-radius: 4px;
         cursor: pointer;
       }
       
       input[type=submit]:hover {
         background-color: #white;
       }
       
       .container {
         border-radius: 5px;
         background-color: #f2f2f2;
         padding: 20px;
       }

      `}</style>


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


    </>
  )
}