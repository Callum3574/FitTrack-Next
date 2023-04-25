/*
  Warnings:

  - You are about to drop the `All_Exercises` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "All_Exercises";

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "user_email" TEXT NOT NULL,
    "height" INTEGER,
    "age" INTEGER,
    "weight" DOUBLE PRECISION,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Walks" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "distance" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "calories" INTEGER,
    "location" TEXT NOT NULL,
    "steps" INTEGER NOT NULL,

    CONSTRAINT "Walks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Runs" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "distance" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "calories" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "steps" INTEGER NOT NULL,

    CONSTRAINT "Runs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Goals" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "target_type" TEXT NOT NULL,
    "target" TEXT NOT NULL,
    "target_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Goals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workouts" (
    "id" SERIAL NOT NULL,
    "workout_type" TEXT NOT NULL,

    CONSTRAINT "Workouts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_user_email_key" ON "Users"("user_email");

-- CreateIndex
CREATE UNIQUE INDEX "Workouts_workout_type_key" ON "Workouts"("workout_type");

-- AddForeignKey
ALTER TABLE "Walks" ADD CONSTRAINT "Walks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Runs" ADD CONSTRAINT "Runs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goals" ADD CONSTRAINT "Goals_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
