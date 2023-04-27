/*
  Warnings:

  - You are about to drop the `Run` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Walk` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Run" DROP CONSTRAINT "Run_user_email_fkey";

-- DropForeignKey
ALTER TABLE "Walk" DROP CONSTRAINT "Walk_user_email_fkey";

-- DropTable
DROP TABLE "Run";

-- DropTable
DROP TABLE "Walk";

-- CreateTable
CREATE TABLE "UserWorkouts" (
    "id" SERIAL NOT NULL,
    "workout_type" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "distance" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "calories" INTEGER,
    "location" TEXT NOT NULL,
    "steps" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "UserWorkouts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserWorkouts" ADD CONSTRAINT "UserWorkouts_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "Users"("user_email") ON DELETE RESTRICT ON UPDATE CASCADE;
