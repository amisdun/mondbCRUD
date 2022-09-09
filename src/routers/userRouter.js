import { Router } from "express";
import {
  updateUser,
  deleteUser,
  getAllUsers,
  createUser,
} from "../controller/index.js";

const router = Router();

// user route for CRUD

router.post("/user", createUser);
router.get("/user", getAllUsers);
router.delete("/user/:_id", deleteUser);
router.put("/user/:_id", updateUser);

export default router;
