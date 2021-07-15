const { User } = require("../../db");

async function createUsers(req, res, next) {
  const { firstName, lastName, email, password } = req.body
  try {
    const user = await User.findOne({ where: { email } })
    if (user) {
      return res.send('usuario ya existe')
    }
    await User.create({
      firstName,
      lastName,
      email,
      password
    });
    return res.send('usuario creado exitosamente')
  }
  catch (e) {
    res.send(e)
  }
}





module.exports = {
  createUsers
};
