import mongoose, { Document, model, models, Schema } from "mongoose";
interface Iproduct extends Document {
  price: number;
  title: string;
  subtitle: string;
  desc: string;
  subdesc: string;
  images: string[];
  reviews: {
    user: mongoose.Types.ObjectId;
    rating: number;
    comment: string;
    createdAt: Date;
  }[];
  category: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<Iproduct>(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    desc: { type: String, required: true },
    subdesc: { type: String },
    price: { type: Number, required: true },
    images: [{ type: String }],
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        rating: { type: Number, min: 1, max: 5, required: true },
        comment: { type: String },
        createdAt: { type: Date, default: Date.now() },
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // Model name remains capitalized
      required: true,
    },
  },
  { timestamps: true }
);

export const Product =
  models.Product || model<Iproduct>("Product", productSchema);
