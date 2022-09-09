import { Book } from "../models/bookModel.js";

export const createBook = async (bookDetails) => {
  const newBook = await Book.create(bookDetails);
  return newBook;
};
