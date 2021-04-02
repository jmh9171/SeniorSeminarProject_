import fetchJson from '../../lib/fetchJson'
import withSession from '../../lib/session'


export default withSession(async (req, res) => {
  // get the username from the request body, which was sent  
  const {
    username
  } = await req.body
  // hard coded ur

  try {
    // create a user object with url information
    const user = {
      isLoggedIn: true,
      username: username,
    }
    console.log("here")
    // set the cookie and call it user on the backend
    req.session.set('user', user)
    await req.session.save()
    res.json(user)
  } catch (error) {
    const {
      response: fetchResponse
    } = error
    res.status(fetchResponse ?.status || 500).json(error.data)
  }
})