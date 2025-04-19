import { Category } from "@/models/Categor";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const { name } = await req.json();
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return NextResponse.json(
        { error: "Category already exist" },
        { status: 409 }
      );
    }
    const newCategory = await Category.create({ name });
    return NextResponse.json(
      { message: "Category created Successfully.", newCategory },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Interval Server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const newCategory = await Category.find();
    return NextResponse.json(newCategory, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Interval Server error" },
      { status: 500 }
    );
  }
}
