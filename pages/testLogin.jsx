import { useState } from 'react'
import useUser from '../lib/useUser'

import Form from '../components/Form'
import fetchJson from '../lib/fetchJson'

// will redirect you to /profile-sg if a session is found
const Login = () => {
    // import mutateUser from useUser, have to do it in {} because 
    // it is not the default export. Set settings for object
    const { mutateUser } = useUser({
        redirectTo: '/loginPage',
        redirectIfFound: true,
    })

    //create an 'errorMsg' stateful value and a function to change it
    const [errorMsg, setErrorMsg] = useState('')

    // callback function to handle the submit button
    async function handleSubmit(e) {
        e.preventDefault()

        // create a json object that holds the username you input
        // get the username from the event of the submit button
        const body = {
            username: e.currentTarget.username.value,
        }

        try {
            // call the mutateUser callback function 
            await mutateUser(
                // fetch the data from the login api with the username in the body of the message
                fetchJson('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                })
            )
        } catch (error) {
            console.error('An unexpected error happened:', error)
            setErrorMsg(error.data.message)
        }
    }
    // jsx that is returned
    return (
        <>
            <div className="login">
                <Form isLogin errorMessage={errorMsg} onSubmit={handleSubmit} />
            </div>
            <style jsx>{`
        .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
        </>
    )
}

export default Login
