/*
  Warnings:

  - Added the required column `duration` to the `Runs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Runs" ADD COLUMN     "duration" INTEGER NOT NULL;
