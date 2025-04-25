import { Document, model, models, Schema } from "mongoose";
interface ICategory extends Document {
  name: string;
}
const CategorySchema = new Schema<ICategory>({
  name: { type: String, required: true, unique: true },
});

export const Category =
  models.Category || model<ICategory>("Category", CategorySchema);
