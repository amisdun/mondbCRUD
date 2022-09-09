import { User } from "../models/userModel.js";

export const createAuthor = async (userDetails) => {
  const newUser = await User.create(userDetails);
  return newUser;
};
