import {
  query
} from '../../lib/db'
/**
 * @param  {} req
 * @param  {} res
 */
const handler = async (req, res) => {

  const {
    email,
    username,
    password
  } = req.body
  try {
    if (!username || !password || !email) {
      return res
        .status(400)
        .json({
          message: 'Must supply a `username`, `password` and `email`'
        })
    }

    const check = await query(
      `SELECT username email FROM users WHERE username = ? AND email = ?`,
      [username, email]
    )

    if (check[0]) {
      return res
        .status(401)
        .json({
          message: 'Email or Username already in use'
        })
    }


    const results = await query(
      `INSERT INTO users (username, passhash, email) VALUES (?,?,?)`,
      [username, password, email]
    )

    return res.status(200)
      .json(results)

  } catch (e) {
    res.status(500).json({
      message: e.message
    })
  }
}
export default handler