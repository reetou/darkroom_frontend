export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export const NEXT_API_URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";
