import withSession from '../../lib/session'
import {
  query
} from '../../lib/db'
export default withSession(async (req, res) => {
  try {
    const game_1 = await query(
      `DELETE FROM userSession WHERE sesh = ?`,
      [req.cookies.session]
    )
  } catch (e) {
    console.log("Logout API: ", e.message)
  }
  req.session.destroy()
  res.json({
    isLoggedIn: false
  })
})