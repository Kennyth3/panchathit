import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { createSession } from "@/lib/session";

export async function POST(req: Request) {
    const { email, password } = await req.json();

    await connectDB();

    const user = await User.findOne({ email });

    if (!user) {
        return NextResponse.json(
            { message: "Invalid email or password" },
            { status: 401 }
        );
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
        return NextResponse.json(
            { message: "Invalid email or password" },
            { status: 401 }
        );
    }

    // สร้าง session หลังจากตรวจสอบผ่าน
    await createSession(user);

    return NextResponse.json({ message: "Login successful" }, { status: 200 });
}
