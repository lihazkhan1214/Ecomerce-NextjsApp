import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { Product } from "@/models/Product";
import cloudinary from "@/lib/cloudinary";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    // Parse form data
    const formData = await req.formData();

    // Extract text fields
    const title = formData.get("title") as string;
    const subtitle = formData.get("subtitle") as string;
    const desc = formData.get("desc") as string;
    const subdesc = formData.get("subdesc") as string;
    const price = parseFloat(formData.get("price") as string);
    const category = formData.get("category") as string;
    const images = formData.getAll("images") as File[];

    // Upload images to Cloudinary
    const imageUrls = await Promise.all(
      images.map(async (image) => {
        const buffer = await image.arrayBuffer();
        const array = new Uint8Array(buffer);

        return new Promise<string>((resolve, reject) => {
          cloudinary.uploader
            .upload_stream(
              { folder: "products", resource_type: "auto" },
              (error, result) => {
                if (error) reject(error);
                resolve(result?.secure_url || "");
              }
            )
            .end(array);
        });
      })
    );

    // Filter out any failed uploads
    const validImageUrls = imageUrls.filter((url) => url !== "");

    // Create product with image URLs
    const newProduct = await Product.create({
      title,
      subtitle,
      desc,
      subdesc,
      price,
      images: validImageUrls,
      category,
    });

    return NextResponse.json(
      { message: "Product created", product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    // Ensure connection exists
    await dbConnect();

    const getProducts = await Product.find().populate("category", "name");
    // .populate({
    //   path: "category",
    //   select: "name",
    //   model: "Category",
    // })
    // .lean()
    // .exec();

    return NextResponse.json(getProducts, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", {
      error,
      // Safe connection state check
      connectionState: mongoose.connection?.readyState || "DISCONNECTED",
      // List registered models
      registeredModels: mongoose.modelNames(),
    });

    return NextResponse.json(
      {
        error: "Database operation failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
