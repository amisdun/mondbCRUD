import { Book } from "../models/bookModel.js";
import { checkIfDocumentExist } from "./documentExists.js";

export const deleteBook = async (bookDetails) => {
  const { _id } = bookDetails;
  await checkIfDocumentExist(Book, { _id });
  await User.deleteOne({ _id });
};
