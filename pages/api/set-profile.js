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
        const {
            userID,
            prefGame_1,
            prefGame_2,
            prefGame_3,
            description
        } = req.body

        if (prefGame_2) {
            const game_1 = await query(
                `INSERT INTO userGames (id, game) VALUES (?,?)`,
                [userID, prefGame_1]
            )
        }

        if (prefGame_2) {
            const game_2 = await query(
                `INSERT INTO userGames (id, game) VALUES (?,?)`,
                [userID, prefGame_2]
            )
        }

        if (prefGame_3) {
            const game_3 = await query(
                `INSERT INTO userGames (id, game) VALUES (?,?)`,
                [userID, prefGame_3]
            )
        }

        //UPDATE `user` SET `description`="This is a brand new description" WHERE `user_id` = 1
        if (description) {
            const desc = await query(
                `UPDATE user SET description = ? WHERE user_id = ?`,
                [description, userID]
            )
        }

        return res.status(200)
            .json({
                message: "OK"
            })

    } catch (e) {
        console.log(e.message)
        return res.status(500)
            .json({
                message: e.message
            })
    }
})