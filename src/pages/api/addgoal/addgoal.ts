import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../prisma/primsa";

type Data = {
  res: string;
};

export const addToDB = async (goalData) => {
  await prisma.goals.create({
    data: {
      user_email: goalData.userEmail,
      type: goalData.type,
      target: goalData.target,
      timeFrame: goalData.timeFrame,
      goalDesc: goalData.goalDesc,
      goalName: goalData.goalName,
    },
  });
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    if (req.method === "POST") {
      const goalData = req.body;

      await addToDB(goalData.formInput);

      res.status(200).json({ message: "sucess" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

export default handler;
