-- CreateTable
CREATE TABLE "link" (
    "id" TEXT NOT NULL,
    "redirect" TEXT NOT NULL,
    "clicked" INTEGER NOT NULL,

    CONSTRAINT "link_pkey" PRIMARY KEY ("id")
);
