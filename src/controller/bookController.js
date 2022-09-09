import {
  getAllBooks as getBooks,
  deleteBook as delBook,
  updateBook as alterBook,
  createBook as saveBook,
} from "../services/index.js";

export const getAllBooks = async (request, response, next) => {
  try {
    const books = await getBooks();
    return response.status(200).json({ data: books });
  } catch (error) {
    return response.status(500).json({ error, message: error.message });
  }
};

export const deleteBook = async (request, response, next) => {
  try {
    const { _id } = request.params;
    await delBook({ _id });
  } catch (error) {
    return response.status(500).json({ error, message: error.message });
  }
};

export const updateBook = async (request, response, next) => {
  try {
    const { _id } = request.params;
    const body = request.body;
    const bookDetails = {
      _id,
      ...body,
    };
    const book = await alterBook(bookDetails);
    return response.status(200).json({ data: book });
  } catch (error) {
    return response.status(500).json({ error, message: error.message });
  }
};

export const createBook = async (request, response, next) => {
  try {
    const newBook = await saveBook(request.body);
    return response.status(201).json({ data: newBook });
  } catch (error) {
    return response.status(500).json({ error, message: error.message });
  }
};
