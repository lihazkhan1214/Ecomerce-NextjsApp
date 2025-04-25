import { deleteCloudinaryImages, uploadImages } from "@/lib/cloudinary";
import dbConnect from "@/lib/dbConnect";
import { Product } from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: "Invalid product ID format" },
        { status: 400 }
      );
    }

    const product = await Product.findById(params.id)
      .populate({
        path: "category",
        select: "name",
      })
      .lean();

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: "Invalid product ID format" },
        { status: 400 }
      );
    }

    const deletedProduct = await Product.findByIdAndDelete(params.id);

    if (!deletedProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Delete images from Cloudinary
    if (deletedProduct.images?.length > 0) {
      try {
        await deleteCloudinaryImages(deletedProduct.images);
      } catch (error) {
        console.error("Cloudinary deletion error:", error);
        // Continue deletion even if image cleanup fails
      }
    }

    return NextResponse.json(
      { message: "Product deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: "Invalid product ID format" },
        { status: 400 }
      );
    }

    const existingProduct = await Product.findById(params.id);
    if (!existingProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const formData = await req.formData();
    const updateData: Partial<typeof existingProduct> = {};

    // Track old images for cleanup
    let oldImages: string[] = [];

    // Handle new images
    const newImages = formData.getAll("images") as File[];
    if (newImages.length > 0) {
      // Upload new images first
      const imageUrls = await uploadImages(newImages);
      const validImageUrls = imageUrls.filter((url) => url !== "");

      // Store old images for cleanup
      oldImages = [...existingProduct.images];

      // Set new images
      updateData.images = validImageUrls;
    }

    // Update other fields...
    // (Keep your existing field update logic here)

    const updatedProduct = await Product.findByIdAndUpdate(
      params.id,
      updateData,
      { new: true, runValidators: true }
    ).populate("category");

    // Cleanup old images after successful update
    if (oldImages.length > 0) {
      try {
        await deleteCloudinaryImages(oldImages);
      } catch (error) {
        console.error("Old image cleanup failed:", error);
        // Continue even if cleanup fails
      }
    }

    return NextResponse.json(
      { message: "Product updated", product: updatedProduct },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
