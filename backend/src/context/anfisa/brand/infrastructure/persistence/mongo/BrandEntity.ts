import { Schema, model } from "mongoose";

const BrandSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const BrandEntity = model("brand", BrandSchema);
