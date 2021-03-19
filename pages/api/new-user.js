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

    const results = await query(
      `
          INSERT INTO users (username, password)
          VALUES (?, ?)
          `,
      [username, password]
    )

    return res.json(results)
  } catch (e) {
    res.status(500).json({
      message: e.message
    })
  }
}
export default handler