import {
    query
} from '../../lib/db'
import withSession from '../../lib/session'
/**
 * @param  {} req - request
 * @param  {} res - response
 */
export default withSession(async (req, res) => {
    try {
        const user = req.session.get("user")
        const id = await query(
            'SELECT user_id FROM user WHERE username = ?',
            [user.username]
        )
        const results = await query(
            `INSERT INTO userSession (id, sesh) VALUES (?,?)`,
            [id[0].user_id, req.cookies.session]
        )

        return res.status(200)
            .json({
                message: results
            })

    } catch (e) {
        console.log(e.message)
        return res.status(500)
            .json({
                message: e.message
            })
    }
})