const { Router } = require("express");
const { getUsers } = require("../controllers/usersControllers/getUsers");
const {createUsers} = require("../controllers/usersControllers/createUsers")
const {updateUsers} = require ('../controllers/usersControllers/updateUsers')
const {deleteUser} = require ('../controllers/usersControllers/deleteUser')


const router = Router();

router.get("/", getUsers);
router.post("/create", createUsers);
router.put("/update/:id", updateUsers);
router.delete("/delete/:id", deleteUser);

module.exports = router;
