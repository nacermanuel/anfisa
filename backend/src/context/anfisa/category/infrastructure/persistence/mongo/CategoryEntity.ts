import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export const CategoryEntity = model("categories", CategorySchema);
