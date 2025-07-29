import exprerss from "express";
import {
  registerUser,
  loginUser,
  logoutUser
} from "../controllers/UserController.js";

const userRoute = exprerss.Router();

userRoute.post("/", loginUser)
userRoute.post("/register", registerUser)
userRoute.get("/logout", logoutUser)



export default userRoute;