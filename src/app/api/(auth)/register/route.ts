import { User } from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { Message } from "@mui/icons-material";
export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });
    newUser.save();
    return NextResponse.json(
      { Message: "Successfully registered User" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Internal server error, please try again later",
      },
      { status: 500 }
    );
  }
}
