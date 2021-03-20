import {
    query
} from '../../lib/db'
/**
 * @param  {} req
 * @param  {} res
 */
const handler = async (req, res) => {

    const {
        username,
        password
    } = req.body
    try {
        if (!username || !password) {
            return res
                .status(400)
                .json({
                    message: 'Must supply a `username`, `password` and `email`'
                })
        }


        const results = await query(
            `
        INSERT INTO users (username, passhash, email) VALUES (?,?,?)
            `,
            [username, password, "email@email.com"]
        )

        return res.json(results)
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}
export default handler