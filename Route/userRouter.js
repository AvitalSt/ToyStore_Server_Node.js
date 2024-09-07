const  express =require("express")
const router = express.Router()
const userController=require("../Controllers/userController")
const autorition =require("../middelwares/autorition")

router.post('/login', autorition.auth, userController.login)
router.post('/createUser', autorition.auth, userController.createUser)


module.exports=router