import {Router} from "express";
import {registerUser, loginUser} from "../controller/userController";


const router = Router();

/* POST register users */
router.post("/", async (req, res) => {
	try {
		const data = req.body;
		const response = await registerUser(data);
		res.status(201).json({
			msg: "success, new user created",
			response
		});
	} catch (error) {
		console.log("########", error)
		res.status(500).json({
			msg: error
		});
	}
});

/* Login users */
router.get("/", async (req, res) => {
	try {
		const data = req.body;
		const response = await loginUser(data);
		res.status(201).json({
			msg: "User successfully logged in",
			response})
	}catch(error) {
		res.status(500).json({msg: error})
	}
});

export default router;
