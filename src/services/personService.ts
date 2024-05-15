import { User } from "@/utils/common/person";

export async function fetchPersonDetails(
  person: string,
  signal: AbortSignal,
): Promise<User> {
  const response = await fetch(`/api/person?person=${person}`, { signal });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = (await response.json()) as User;
  return data;
}
