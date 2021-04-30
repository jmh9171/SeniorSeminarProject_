import {
  query
} from '../../lib/db'


const handler = async (req, res) => {
  const router = useRouter()
  const rawCookie = req.headers.cookie
  const cookie = rawCookie.substring(8, rawCookie.length)
  const group = req.body.groupname
  try {


    const userID = await query(
      `SELECT id FROM userSession WHERE sesh = ?`,
      [cookie]
    )


    const member = await query(
      `INSERT INTO member (user_id, playgroup_name) VALUES (?,?)`,
      [userID[0].id, group]
    )

    return res.status(200).json({
      member
    })


  } catch (e) {
    return res.status(500)
      .json({
        message: e.message
      })
  }
}

export default handler