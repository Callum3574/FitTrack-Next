/*
  Warnings:

  - You are about to drop the column `user_id` on the `Goals` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Runs` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Walks` table. All the data in the column will be lost.
  - Added the required column `user_email` to the `Goals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_email` to the `Runs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_email` to the `Walks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Goals" DROP CONSTRAINT "Goals_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Runs" DROP CONSTRAINT "Runs_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Walks" DROP CONSTRAINT "Walks_user_id_fkey";

-- AlterTable
ALTER TABLE "Goals" DROP COLUMN "user_id",
ADD COLUMN     "user_email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Runs" DROP COLUMN "user_id",
ADD COLUMN     "user_email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Walks" DROP COLUMN "user_id",
ADD COLUMN     "user_email" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Walks" ADD CONSTRAINT "Walks_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "Users"("user_email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Runs" ADD CONSTRAINT "Runs_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "Users"("user_email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goals" ADD CONSTRAINT "Goals_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "Users"("user_email") ON DELETE RESTRICT ON UPDATE CASCADE;
