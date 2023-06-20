import { NextResponse } from "next/server";
import { edgeStream } from "@/utils/random";

export async function GET(): Promise<NextResponse> {
  const stream = edgeStream().pipeThrough(new TextEncoderStream());
  return new NextResponse(stream);
}

export const runtime = "nodejs";
