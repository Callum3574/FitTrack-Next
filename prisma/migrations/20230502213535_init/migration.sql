/*
  Warnings:

  - Added the required column `goalName` to the `Goals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Goals" ADD COLUMN     "goalName" TEXT NOT NULL;
