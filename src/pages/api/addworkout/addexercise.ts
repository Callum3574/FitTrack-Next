import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../prisma/primsa";
const TYPE_RUN = "run";
const TYPE_WALK = "walk";

type Data = {
  name: string;
};

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  if (req.method === "POST") {
    const formData = req.body;
    const {
      exerciseType,
      location,
      duration,
      calories,
      timeAndDate,
      distance,
      user,
      steps,
    } = req.body;
    console.log(user);

    if (exerciseType === TYPE_RUN) {
      const newWalk = await prisma.walks.create({
        data: {
          user_email: user,
          distance: parseInt(distance),
          date: timeAndDate.slice("T")[0],
          time: timeAndDate.slice("T")[1],
          calories: parseInt(calories),
          location: location,
          steps: parseInt(steps),
          duration: parseInt(duration),
        },
      });
    }
  }
};

export default handler;
