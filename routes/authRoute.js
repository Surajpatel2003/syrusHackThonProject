import express from "express";
import {
  registerController,
  loginController,
} from "../controllers/authController.js";
// router object
const router = express.Router();

//routing
//REGISTER   METHOD=POST
router.post("/register", registerController);

// LOGIN METHOS=POST

router.post("/login", loginController);

export default router;
