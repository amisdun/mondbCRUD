import { User } from "../models/userModel.js";
import { checkIfDocumentExist } from "./documentExists.js";

export const updateAuthor = async (userUpdate) => {
  const { _id, ...rest } = userUpdate;
  await checkIfDocumentExist(User, { _id });
  const updatedUser = await User.findByIdAndUpdate(
    _id,
    { ...rest },
    { new: true }
  ).select("-_id");

  return updatedUser;
};
