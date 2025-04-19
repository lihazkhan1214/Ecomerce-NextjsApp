import dbConnect from "@/lib/dbConnect";
import { generateToken } from "@/lib/generateToken";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { email, password } = await req.json();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid cridentails" },
        { status: 401 }
      );
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid cridentails" },
        { status: 401 }
      );
    }
    const token = generateToken(user._id);
    return NextResponse.json(
      {
        message: "login  successfull!",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to connect to the database." },
      { status: 500 }
    );
  }
}
