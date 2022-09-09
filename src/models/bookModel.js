import mongoose from "mongoose";

const { Schema, model } = mongoose;

const BookSchema = new Schema(
  {
    bookName: {
      type: String,
      required: true,
    },
    author: {
      required: true,
      ref: "User",
      type: Schema.Types.ObjectId,
    },
    genre: {
      required: false,
      type: String,
    },
    pages: {
      required: true,
      type: Number,
    },
    title: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

export const Book = model("Book", BookSchema);
