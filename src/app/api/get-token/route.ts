import { GetTokenValue } from "@/getUserToken";

export async function GET() {
  const token = await GetTokenValue();
  return Response.json({ token });
}
