import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  id: { type: String, require: true },
  price: { type: Number, require: true },
  name: { type: String, require: true },
  description: { type: String, require: true },
  avalible: { type: Boolean, require: true },
  image: { type: String, require: true },
  amount: { type: Number, require: true },
  brand: { type: String, require: true },
  category: { type: String, require: true },
  relevant: { type: Boolean, require: true },
});

export const ProductModel = model("products", ProductSchema);
