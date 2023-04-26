/*
  Warnings:

  - You are about to drop the `Runs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Walks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Runs" DROP CONSTRAINT "Runs_user_email_fkey";

-- DropForeignKey
ALTER TABLE "Walks" DROP CONSTRAINT "Walks_user_email_fkey";

-- DropTable
DROP TABLE "Runs";

-- DropTable
DROP TABLE "Walks";

-- CreateTable
CREATE TABLE "Walk" (
    "id" SERIAL NOT NULL,
    "user_email" TEXT NOT NULL,
    "distance" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "calories" INTEGER,
    "location" TEXT NOT NULL,
    "steps" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "Walk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Run" (
    "id" SERIAL NOT NULL,
    "user_email" TEXT NOT NULL,
    "distance" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "calories" INTEGER,
    "location" TEXT NOT NULL,
    "steps" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "Run_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Walk" ADD CONSTRAINT "Walk_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "Users"("user_email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Run" ADD CONSTRAINT "Run_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "Users"("user_email") ON DELETE RESTRICT ON UPDATE CASCADE;
