import { User } from "../models/userModel.js";

export const getAuthors = async () => {
  const getUsers = await User.find({}).sort({ firstName: 1 });
  return getUsers;
};
