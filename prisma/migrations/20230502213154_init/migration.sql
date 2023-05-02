/*
  Warnings:

  - You are about to drop the column `target_date` on the `Goals` table. All the data in the column will be lost.
  - You are about to drop the column `target_type` on the `Goals` table. All the data in the column will be lost.
  - Added the required column `goalDesc` to the `Goals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeFrame` to the `Goals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Goals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Goals" DROP COLUMN "target_date",
DROP COLUMN "target_type",
ADD COLUMN     "goalDesc" TEXT NOT NULL,
ADD COLUMN     "timeFrame" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
