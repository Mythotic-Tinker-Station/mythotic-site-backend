import express from "express";
import DB from "./database";

const router = express.Router();

router.get("/api/hello", (req, res, next) => {
	res.json("World");
});

router.get("/api/users", async (req, res) => {
	try {
		let users = await DB.Users.getAllUsers();
		res.json(users);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});

export default router;
