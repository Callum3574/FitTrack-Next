import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../prisma/primsa";
import { ExerciseData } from "../../../../Types";
const TYPE_RUN = "run";
const TYPE_WALK = "walk";

type Data = {
  res: string;
};

const addToDB = async (exerciseData: ExerciseData, type: string) => {
  const dynamicType: any = (prisma as any)[type];
  await dynamicType.create({
    data: {
      user_email: exerciseData.user,
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
    if (req.body.formInput.exerciseType === TYPE_WALK) {
      await addToDB(req.body.formInput, TYPE_WALK);
    } else if (req.body.formInput.exerciseType === TYPE_RUN) {
      await addToDB(req.body.formInput, TYPE_RUN);
    }
  }
  res.status(200).json({ res: "success" });
};

export default handler;
