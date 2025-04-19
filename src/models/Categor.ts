import { Document, model, models, Schema } from "mongoose";
interface ICategory extends Document {
  name: string;
  desc: string;
}
const CategorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  desc: { type: String },
});

export const Category =
  models.Category || model<ICategory>("Category", CategorySchema);
