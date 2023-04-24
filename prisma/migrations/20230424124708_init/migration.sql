-- CreateTable
CREATE TABLE "All_Exercises" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "All_Exercises_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "All_Exercises_name_key" ON "All_Exercises"("name");
