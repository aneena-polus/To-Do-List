import express from "express";
import { userLogin, userSignup, getCountryList, getStateList } from "../controllers/loginController.js";

const router = express();

router.post("/login", userLogin);           
router.post("/signup", userSignup);           
router.get("/countries", getCountryList);           
router.get("/states/:countryCode", getStateList);

export default router;