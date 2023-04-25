/*
  Warnings:

  - Added the required column `duration` to the `Walks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Walks" ADD COLUMN     "duration" INTEGER NOT NULL;
