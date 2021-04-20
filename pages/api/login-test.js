import {
    query
} from '../../lib/db'
import withSession from '../../lib/session'
/**
 * @param  {} req - request
 * @param  {} res - response
 */
export default withSession(async (req, res) => {
    // pull the username and password from the request body message
    const {
        username,
        password
    } = req.body


    try {
        // check if there is a username and password
        if (!username || !password) {
            // if not return a message 
            return res.status(400)
                .json({
                    message: 'Must supply a `username` and `password`'
                })
        }

        // the query to see if the username is already taken 
        const results = await query(
            `SELECT password FROM user WHERE username = ?`,
            [username]
        );


        const user = {
            isLoggedIn: true,
            username: username,
        }

        // if the resulting object contains anything, the first element will be filled.
        // if there is no first element, there were no results
        if (results[0]) {
            if (password === results[0].password) {
                req.session.set('user', user)
                await req.session.save()
                return res.status(200)
                    .json({
                        message: results
                    })
            } else {
                return res.status(401)
                    .json({
                        message: 'No matching username or password'
                    })
            }
        }

        // else, return a status 400 response, indicating no match
        return res.status(401)
            .json({
                message: 'No matching username or password'
            })

    } catch (e) {
        console.log(e.message)
        return res.status(500)
            .json({
                message: e.message
            })
    }
})