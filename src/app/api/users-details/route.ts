import prisma from "@/utils/connectdb";
// import axios from "axios"
import { NextResponse } from "next/server";

export const GET = async () => {
  const userDetails = await prisma.users.findMany();

  if (!userDetails) {
    return NextResponse.json({ error: "user details not found" });
  }
  return NextResponse.json(userDetails);
};
