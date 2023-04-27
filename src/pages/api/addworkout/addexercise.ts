import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../prisma/primsa";
import { ExerciseData } from "../../../../Types";

type Data = {
  res: string;
};

const addToDB = async (exerciseData: ExerciseData) => {
  await prisma.userWorkouts.create({
    data: {
      user_email: exerciseData.user_email,
      workout_type: exerciseData.exerciseType,
      distance: parseInt(exerciseData.distance),
      date: new Date(exerciseData.timeAndDate.split("T")[0]),
      time: exerciseData.timeAndDate.split("T")[1],
      calories: parseInt(exerciseData.calories),
      location: exerciseData.location,
      steps: parseInt(exerciseData.steps),
      duration: parseInt(exerciseData.duration),
    },
  });
};

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  if (req.method === "POST") {
    addToDB(req.body.formInput);
  }
  res.status(200).json({ res: "success" });
};

export default handler;
