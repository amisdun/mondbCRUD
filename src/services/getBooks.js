import { Book } from "../models/bookModel.js";

export const getAllBooks = async () => {
  const getBooks = await Book.find({})
    .populate("author", "email firstName -_id")
    .sort({ pages: -1 });

  return getBooks;
};
