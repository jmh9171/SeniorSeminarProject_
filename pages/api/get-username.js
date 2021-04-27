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
        // get the id associated with the session
        const userID = await query(
            `SELECT id FROM userSession WHERE sesh = ?`,
            [req.body.cook]
        )
        // if there isnt one then return bad status code
        
        if (!userID[0]) {
            console.log("USER ID: ",userID)
            return res.status(401)
                .json({
                    message: 'no session available'
                })
        }

        const userInfo = await query(
            `SELECT username, description FROM user WHERE user_id = ?`,
            [userID[0].id]
        )
        

        // else, return a status 400 response, indicating no match
        return res.status(200)
            .json({
                userID: userID[0].id,
                userInfo: userInfo
            })

    } catch (e) {
        console.log("HERE: ",e.message)
        return res.status(500)
            .json({
                message: e.message
            })
    }
})