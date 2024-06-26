import { conn } from "@/components/NeonDB";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
  const jobListings = await conn`SELECT * FROM job_listings`;
  return NextResponse.json(jobListings);
}
