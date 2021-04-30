import {
  query
} from '../../lib/db'

const handler = async (req, res) => {
  const {
    groupName,
    description
  } = req.body
  try {
    if (!groupName) {
      return res
        .status(400)
        .json({
          message: 'groupName required'
        })
    }

    const results = await query(
      `
      INSERT INTO playgroup (name, description)
      VALUES (?, ?)
      `,
      [groupName, description]
    )
    return res.status(200)
      .json(results)
  } catch (e) {
    res.status(500).json({
      message: e.message
    })
  }
}

export default handler