import exprerss from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  updateUserProfile,
  getUsers,
  updateUser,
  getUserById,
  deleteUser
  
} from "../controllers/UserController.js";
import { admin, protect } from "../middlewares/authMiddleware.js";

const userRoute = exprerss.Router();

userRoute.post("/", loginUser)
userRoute.post("/register", registerUser)

userRoute.get("/logout", logoutUser)

userRoute.get("/profile",updateUserProfile)
userRoute.route('/').post(registerUser).get(protect , admin , getUsers)



userRoute.route('/:id')
.put(protect, admin, updateUser)
.get(protect, admin, getUserById)
 .delete(protect, admin, deleteUser)


export default userRoute;