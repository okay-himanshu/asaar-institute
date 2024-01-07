import { Router } from "express";

import handleUser from "../../controllers/users/controller.users.js";

const userRoute = Router();

// signup
userRoute.post("/signup", handleUser.signup);

export default userRoute;
