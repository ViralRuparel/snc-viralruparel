import { PrismaClient } from "@prisma/client";
import { Person, User } from "@/utils/common/person";

const prisma = new PrismaClient();

export async function getPersonFromDB(personName: Person): Promise<User> {
  try {
    const person = await prisma.user.findFirst({
      where: { name: personName },
    });
    return person as User;
  } catch (error) {
    console.error("Error fetching person from DB:", error);
    throw error;
  }
}
