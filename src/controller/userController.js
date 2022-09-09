import { createAuthor } from "../services/creatUser.js";
import { deleteAuthor } from "../services/deleteUsers.js";
import { getAuthors } from "../services/getUsers.js";
import { updateAuthor } from "../services/updateUser.js";

export const getAllUsers = async (request, response, next) => {
  try {
    const users = await getAuthors();
    return response.status(200).json({ data: users });
  } catch (error) {
    return response.status(500).json({ error, message: error.message });
  }
};

export const deleteUser = async (request, response, next) => {
  try {
    const { _id } = request.params;
    await deleteAuthor({ _id });
    return response.status(200).json({ message: "User Deleted" });
  } catch (error) {
    return response.status(500).json({ error, message: error.message });
  }
};

export const updateUser = async (request, response, next) => {
  try {
    const { _id } = request.params;
    const body = request.body;
    const userDetails = {
      _id,
      ...body,
    };
    const user = await updateAuthor(userDetails);
    return response.status(200).json({ data: user });
  } catch (error) {
    return response.status(500).json({ error, message: error.message });
  }
};

export const createUser = async (request, response, next) => {
  try {
    console.log(request.body);
    const newUser = await createAuthor(request.body);
    return response.status(201).json({ data: newUser });
  } catch (error) {
    return response.status(500).json({ error, message: error.message });
  }
};
