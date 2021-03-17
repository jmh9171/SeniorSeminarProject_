import fetchJson from '../../lib/fetchJson'
import withSession from '../../lib/session'


export default withSession(async (req, res) => {
  // get the username from the request body, which was sent  
  const {
    username
  } = await req.body
  // hard coded url
  const url = `https://api.github.com/users/${username}`

  try {

    // we check that the user exists on GitHub and store some data in session
    // fetch the json from the url and store the url of the avatar img
    const {
      login,
      avatar_url: avatarUrl
    } = await fetchJson(url)
    // create a user object with url information
    const user = {
      isLoggedIn: true,
      login,
      avatarUrl
    }
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