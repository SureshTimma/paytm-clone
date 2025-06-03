import prisma from "@/utils/connectdb";
// import axios from "axios"
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  const userBalance = await prisma.bank_balance.findFirst({
    where: { userId: "683d07739a918807a919c9e2" },
  });

  if (!userBalance) {
    return NextResponse.json({ error: "user balance not found" });
  }
  return NextResponse.json(userBalance);
};

export const PUT = async (req:NextRequest) => {
  const userId = NextRequest.
  const userBalance = await prisma.bank_balance.update({
    where: { id: "683e7d34691e0af66dc27bd3" },
    data: { balance: "1000" },
  });

  return NextResponse.json(userBalance);
};
