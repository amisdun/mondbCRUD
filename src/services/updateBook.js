import { Book } from "../models/bookModel.js";
import { checkIfDocumentExist } from "./documentExists.js";

export const updateBook = async (bookUpdate) => {
  const { _id, ...rest } = bookUpdate;
  await checkIfDocumentExist(Book, { _id });
  const updatedBook = await Book.findByIdAndUpdate(
    _id,
    { ...rest },
    { new: true }
  )
    .populate("author")
    .select("-_id");

  return updatedBook;
};
