import { NextResponse } from "next/server";
import { conn } from "../NeonDB";


export async function GET(req: Request) {
  const jobListings = await conn`SELECT * FROM job_listings`;
  return NextResponse.json(jobListings);
}
