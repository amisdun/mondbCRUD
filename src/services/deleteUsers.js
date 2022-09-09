import { User } from "../models/userModel.js";
import { checkIfDocumentExist } from "./documentExists.js";

export const deleteAuthor = async (userDetails) => {
  const { _id } = userDetails;
  await checkIfDocumentExist(User, { _id });
  await User.deleteOne({ _id });
};
