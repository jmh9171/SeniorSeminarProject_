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

        console.log(req.body)
        // the query to see if the username is already taken 
        const userID = await query(
            `SELECT id FROM userSession WHERE sesh = ?`,
            [req.body.cook]
        )

        console.log("session cookie: ", req.body.cook)

        if (!userID) {
            return res.status(401)
                .json({
                    message: 'no session available'
                })
        }

        const userInfo = await query(
            `SELECT username, description FROM users WHERE id = ?`,
            [userID[0].id]
        )
        console.log(userInfo)


        // else, return a status 400 response, indicating no match
        return res.status(200)
            .json({
                userInfo: userInfo
            })

    } catch (e) {
        return res.status(200)
            .json({
                message: e.message
            })
    }
})