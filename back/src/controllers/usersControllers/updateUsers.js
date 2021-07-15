const { User } = require('../../db')

async function updateUsers(req, res) {

    const { id } = req.params
    const { firstName, lastName, email, password } = req.body

    try {
        const userUpdate = await User.findOne({ where: { id } })
        if (userUpdate) {
            await userUpdate.update({
                firstName,
                lastName,
                email,
                password
            })
            return res.status(202).send('editado exitosamente')
        }
    }
    catch (e) {
        console.log(e)
    }
}

module.exports = {
    updateUsers
}