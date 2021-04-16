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
        console.log("request cookies: ", req.cookies.session)
        const id = await query(
            'SELECT id FROM users WHERE username = ?',
            [user.username]
        )

        const results = await query(
            `INSERT INTO userSession (id, sesh) VALUES (?,?)`,
            [id[0].id, req.cookies.session]
        )
        

        return res.status(200)
            .json({
                message: results
            })

    } catch (e) {
        console.log(e);
    }
})