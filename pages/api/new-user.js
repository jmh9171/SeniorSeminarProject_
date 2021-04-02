import {
  query
} from '../../lib/db'
import withSession from '../../lib/session'
/**
 * @param  {} req
 * @param  {} res
 */
export default withSession(async (req, res) => {
  // pull the username, password, and email from the request body message
  const {
    email,
    username,
    password
  } = req.body
  try {
    // if there is no username or password then return bad status code
    if (!username || !password || !email) {
      return res
        .status(400)
        .json({
          message: 'Must supply a `username`, `password` and `email`'
        })
    }

    // create the user object to hold as a cookie
    const user = {
      isLoggedIn: true,
      username: username,
    }

    // query the database for the requested username and email
    const check = await query(
      `SELECT username email FROM users WHERE username = ? AND email = ?`,
      [username, email]
    )

    // check if there is a response, if there is then the username or email are already being used 
    if (check[0]) {
      return res
        .status(401)
        .json({
          message: 'Email or Username already in use'
        })
    }

    // if not then insert them into the database 
    const results = await query(
      `INSERT INTO users (username, passhash, email) VALUES (?,?,?)`,
      [username, password, email]
    )
    // set the session information on the client side, cookies
    req.session.set('user', user)
    await req.session.save()

    //return an OK status code
    return res.status(200)
      .json(results)

  } catch (e) {
    //console.log(e.message)
    res.status(500).json({
      message: e.message
    })
  }
})