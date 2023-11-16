import axios from "axios";

import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {

    const response = await axios("http://localhost:5004/animals");

    return NextResponse.json(response.data.data);
  } catch (error) {
    console.log("[ORDER_GET]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}