import { Router } from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  updateBook,
} from "../controller/index.js";

const router = Router();

// user route for CRUD

router.post("/book", createBook);
router.get("/book", getAllBooks);
router.delete("/book/:_id", deleteBook);
router.put("/book/:_id", updateBook);

export default router;
