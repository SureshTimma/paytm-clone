import prisma from "@/utils/connectdb";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const userData = await req.json();
  const prismaRes = await prisma.users.create({
    data: userData
  });
  return await NextResponse.json(prismaRes);
};
