export const checkIfDocumentExist = async (Model, query) => {
  const document = await Model.findOne({ ...query });
  if (!document || !document._id) {
    throw new Error("No Document found");
  }
  return true;
};
