import { PrismaClient, link } from "@prisma/client";
const prisma = new PrismaClient();

async function getAllLinks(): Promise<link[]> {
  const links: link[] = await prisma.link.findMany();
  return links;
}

export { getAllLinks };
