import { PrismaClient } from "@prisma/client";
import { mockUsers } from "../src/utils/server/mock-users";
import { Person, User } from "../src/utils/common/person";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  for (const person in mockUsers) {
    const userData: User | null = mockUsers[person as Person];
    if (userData) {
      const createdUser = await prisma.user.create({
        data: userData,
      });
      console.log(`Created user with id: ${createdUser.id}`);
    }
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
